<template>
  <div class="d-flex flex-column">
    <CalendarRibbon
      v-model="view"
      class="mb-2"
      :date.sync="currentDate"
      :date-string="calendarTitle"
      @to-today="toToday"
      @next-timestamp="nextTimestamp"
      @prev-timestamp="prevTimestamp"
      @open-dialog="openNewEventDialog()"
    />

    <v-calendar
      v-model="currentDate"
      ref="calendar"
      :type="view"
      :categories="userProfileCategories"
      category-text="Title"
      category-show-all
      :first-time="'7:00'"
      :interval-count="14"
      :weekdays="weekdays"
      :events="events"
      :event-color="getEventColor"
      :event-text-color="getTextColor"
      locale="en-US"
      :style="{ 'user-select': [this.dragEvent ? 'none' : ''] }"
      @click:interval="openNewEventDialog"
      @click:event="showEvent"
      @click:date="setViewDay"
      @mousedown:event="mouseDownExistEvent"
      @mousedown:time="createDraftEvent"
      @mousemove:time="updateDraftEvent"
      @mouseup:time="endDraftEvent"
      @mousedown:time-category="createDraftEvent"
      @mousemove:time-category="updateDraftEvent"
      @mouseup:time-category="endDraftEvent"
      @mouseleave.native="cancelDrag"
    >
      <template #day-body="{ date, week }">
        <div class="v-current-time" :class="{ first: date === week[0].date }" :style="{ top: nowY }"></div>
      </template>

      <template #event="e">
        <div class="v-event-draggable px-2" v-html="e.eventSummary()"></div>
        <div v-if="e.timed" class="v-event-drag-bottom" @mousedown.stop="extendEventBottom(e.event)"></div>
      </template>
    </v-calendar>

    <v-menu
      v-model="selectedOpen"
      :activator="selectedElement"
      :close-on-content-click="false"
      max-width="500px"
      offset-x
    >
      <template v-if="selectedEvent">
        <VisitEventMenuPreview :visit="selectedEvent" @close="closeSelectedEventMenu" />
      </template>
    </v-menu>
  </div>
</template>

<script lang="ts">
import CalendarRibbon from "@/components/home/CalendarRibbon.vue";
import VisitEventMenuPreview from "@/components/home/VisitEventMenuPreview.vue";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { CalendarView } from "@/entities/CalendarView";
import { UserProfile } from "@/entities/UserProfile";
import { root } from "@/store";
import { isColorWhite } from "@/utils/isColorWhite";
import { roundTime } from "@/utils/roundTime";
import { stringToHexColor } from "@/utils/stringToHexColor";
import { toVuetifyDateTime } from "@/utils/toVuetifyDateTime";
import { vuetifyTimestampToUnixTimestamp } from "@/utils/vuetifyTimestampToUnixTimestamp";
import { Component, Vue } from "vue-property-decorator";
import { CalendarDaySlotScope, CalendarTimestamp } from "vuetify";

type VCalendar = Vue & {
  title: string;
  times: { now: string; today: string };
  prev: (amount?: number) => void;
  next: (amount?: number) => void;
  timeToY: (time: string) => void;
  checkChange: () => void;
  lastStart: CalendarTimestamp;
  lastEnd: CalendarTimestamp;
};

@Component({
  components: { CalendarRibbon, VisitEventMenuPreview },
})
export default class Calendar extends Vue {
  view: CalendarView = "day";
  currentDate?: string = "";
  calendarReady = false;
  weekdays = [1, 2, 3, 4, 5, 6, 0];

  roundMinutes = 15;

  selectedEvent: CalendarEventParsed | null = null;
  selectedElement: EventTarget | null = null;

  dragEvent = false;
  draftEvent: Partial<CalendarEventParsed> | null = null;
  extendEvent: CalendarEventParsed | null = null;

  selectedOpen = false;

  get calendarInstance(): VCalendar {
    return this.$refs.calendar as VCalendar;
  }

  get calendarTitle(): string {
    if (!this.calendarReady) {
      return "";
    }
    const default_ = this.calendarInstance.title as string;
    if (this.view === "day") {
      const day = this.currentDate ? Number(this.currentDate.split("-").pop()) : new Date().getDate();
      return `${day} ${default_}`;
    }
    if (this.view === "week") {
      const start = this.calendarInstance.lastStart;
      const end = this.calendarInstance.lastEnd;
      const startDay = start.day;
      const endDay = end.day;
      const startMonth = new Date(start.date).toLocaleString("en-US", { month: "short" });
      const endMonth = new Date(end.date).toLocaleString("en-US", { month: "short" });
      return `${startDay} ${startMonth === endMonth ? "" : startMonth} ${
        start.year === end.year ? "" : start.year
      } - ${endDay} ${endMonth} ${end.year}`;
    }
    return default_;
  }

  get nowY(): string {
    return this.calendarReady
      ? this.calendarInstance.timeToY(this.calendarInstance.times.now) + "px"
      : "-10px";
  }

  get events(): CalendarEventParsed[] {
    const events = root.getters.events;
    if (this.view === "month") {
      return events;
    } else {
      const eventResults = [...events];
      if (this.dragEvent) eventResults.push(this.draftEvent as CalendarEventParsed);
      if (this.extendEvent) {
        const index = eventResults.findIndex((e) => e.id === this.extendEvent!.id);
        index >= 0 && Vue.set(eventResults, index, this.extendEvent);
      }
      return eventResults;
    }
  }

  get userProfileCategories(): UserProfile[] {
    return root.state.profiles.slice();
  }

  mounted(): void {
    // calendar current date string
    this.calendarInstance.checkChange();
    this.calendarReady = true;
  }

  /**
   * Navigate to today's day/week/month
   */
  toToday(): void {
    this.currentDate = "";
  }

  /**
   * Switch to day view
   */
  setViewDay({ date }: { date: string }): void {
    this.currentDate = date;
    this.view = "day";
  }

  nextTimestamp(): void {
    this.calendarInstance.next();
  }

  prevTimestamp(): void {
    this.calendarInstance.prev();
  }

  getEventColor(e: CalendarEventParsed): string {
    const hexColor = stringToHexColor(e.type);
    if (e.id === this.extendEvent?.id) {
      return `${hexColor}B3`;
    }
    return hexColor;
  }

  showEvent(e: { nativeEvent: Event; event: any }): void {
    const { nativeEvent, event } = e;
    const open = () => {
      this.selectedEvent = event;
      this.selectedElement = nativeEvent.target;
      setTimeout(() => {
        this.selectedOpen = true;
      }, 10);
    };

    if (this.selectedOpen) {
      this.selectedOpen = false;
      setTimeout(open, 10);
    } else {
      open();
    }
  }

  mouseDownExistEvent({ nativeEvent }: { nativeEvent: Event }): void {
    nativeEvent.stopPropagation();
  }

  createDraftEvent(tms: CalendarDaySlotScope): void {
    if (!this.dragEvent && this.draftEvent === null) {
      const time = vuetifyTimestampToUnixTimestamp(tms);
      const timeRounded = new Date(roundTime(time, { roundTo: this.roundMinutes, down: true }));

      const profile: UserProfile = tms.category ? (tms.category as UserProfile) : root.getters.userProfile;

      this.dragEvent = true;
      this.draftEvent = {
        name: `#Draft event`,
        start: toVuetifyDateTime(timeRounded),
        category: profile.Title,
      };
      this.updateDraftEvent(tms);
    }
  }

  updateDraftEvent(tms: CalendarDaySlotScope): void {
    const time = vuetifyTimestampToUnixTimestamp(tms);
    const timeRounded = new Date(roundTime(time, { roundTo: this.roundMinutes }));

    if (this.dragEvent && this.draftEvent !== null) {
      // do not spread event to any other day
      const startTime = new Date(this.draftEvent.start as string);
      startTime.setHours(timeRounded.getHours());
      startTime.setMinutes(timeRounded.getMinutes());

      this.draftEvent = { ...this.draftEvent, end: toVuetifyDateTime(startTime) };
    } else if (this.extendEvent) {
      const startTime = new Date(this.extendEvent.start as string);
      startTime.setHours(timeRounded.getHours());
      startTime.setMinutes(timeRounded.getMinutes());

      this.extendEvent.end = toVuetifyDateTime(startTime);
    }
  }

  async endDraftEvent(): Promise<void> {
    this.dragEvent = false;
    if (this.draftEvent) {
      this.openNewEventDialog(this.draftEvent);
      this.draftEvent = null;
    }
    if (this.extendEvent) {
      const extendEvent = this.extendEvent;
      this.extendEvent = null;
      await root.actions.updatePartialEvent({ Id: extendEvent.id, End: extendEvent.end });
    }
  }

  cancelDrag(): void {
    this.dragEvent = false;
    this.draftEvent = null;
    this.extendEvent = null;
  }

  extendEventBottom(event: CalendarEventParsed): void {
    this.extendEvent = event;
  }

  openNewEventDialog(event?: Partial<CalendarEventParsed> | CalendarDaySlotScope): void {
    this.$dialogs.newEventDialog.open(event);
  }

  closeSelectedEventMenu(): void {
    this.selectedOpen = false;
  }

  getTextColor(e: CalendarEventParsed): string {
    const backColor = e.type ? stringToHexColor(e.type) : "#222";
    return isColorWhite(backColor) ? "white" : "black";
  }
}
</script>

<style lang="scss">
.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;

  &::after {
    display: none;
    position: absolute;
    left: 50%;
    height: 4px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 16px;
    margin-left: -8px;
    opacity: 0.8;
    content: "";
  }

  &:hover::after {
    display: block;
  }
}

.v-event-timed {
  user-select: none;
}
</style>
