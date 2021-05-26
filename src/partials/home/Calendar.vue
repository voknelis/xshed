<template>
  <div class="d-flex flex-column">
    <CalendarRibbon
      v-model="view"
      class="mb-2"
      :date="calendarTitle"
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
import { Component, Vue } from "vue-property-decorator";
import { CalendarDaySlotScope, CalendarTimestamp } from "vuetify";
import CalendarRibbon from "@/components/home/CalendarRibbon.vue";
import VisitEventMenuPreview from "@/components/home/VisitEventMenuPreview.vue";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { CalendarView } from "@/entities/CalendarView";
import { UserProfile } from "@/entities/UserProfile";
import { root } from "@/store";
import { roundTime } from "@/utils/roundTime";
import { stringToHexColor } from "@/utils/stringToHexColor";
import { toVuetifyDateTime } from "@/utils/toVuetifyDateTime";
import { vuetifyTimestampToUnixTimestamp } from "@/utils/vuetifyTimestampToUnixTimestamp";

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
      return this.dragEvent ? [...events, this.draftEvent as CalendarEventParsed] : events;
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
    return stringToHexColor(e.type);
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
      const timeRounded = new Date(roundTime(time, { roundTo: this.roundMinutes }));

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
    if (this.dragEvent && this.draftEvent !== null) {
      const time = vuetifyTimestampToUnixTimestamp(tms);
      const timeRounded = new Date(roundTime(time, { roundTo: this.roundMinutes }));

      // do not spread event to any other day
      const startTime = new Date(this.draftEvent.start as string);
      startTime.setHours(timeRounded.getHours());
      startTime.setMinutes(timeRounded.getMinutes());

      this.draftEvent = { ...this.draftEvent, end: toVuetifyDateTime(startTime) };
    }
  }

  endDraftEvent(): void {
    this.dragEvent = false;
    if (this.draftEvent) {
      this.openNewEventDialog(this.draftEvent);
      this.draftEvent = null;
    }
  }

  cancelDrag(): void {
    this.dragEvent = false;
    this.draftEvent = null;
  }

  openNewEventDialog(event?: Partial<CalendarEventParsed> | CalendarDaySlotScope): void {
    this.$dialogs.newEventDialog.open(event);
  }

  closeSelectedEventMenu(): void {
    this.selectedOpen = false;
  }
}
</script>

<style scoped></style>
