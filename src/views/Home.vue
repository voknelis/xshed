<template>
  <div class="home" :class="{ container: this.$vuetify.breakpoint.lgAndUp }">
    <CalendarRibbon
      v-model="view"
      :date="calendarTitle"
      @to-today="toToday"
      @next-timestamp="nextTimestamp"
      @prev-timestamp="prevTimestamp"
    />

    <v-calendar v-model="currentDate" ref="calendar" :type="view" locale="en-US">
      <template #day-body="{ date, week }">
        <div class="v-current-time" :class="{ first: date === week[0].date }" :style="{ top: nowY }"></div>
      </template>
    </v-calendar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CalendarTimestamp } from "vuetify";
import { CalendarView } from "@/entities/CalendarView";
import CalendarRibbon from "@/partials/Home/CalendarRibbon.vue";

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
  components: { CalendarRibbon },
})
export default class Home extends Vue {
  view: CalendarView = "day";
  currentDate?: string = "";
  calendarReady = false;

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
  get calendarInstance(): VCalendar {
    return this.$refs.calendar as VCalendar;
  }

  mounted(): void {
    // calendar current date string
    this.calendarInstance.checkChange();
    this.calendarReady = true;
  }

  toToday(): void {
    this.currentDate = "";
  }
  nextTimestamp(): void {
    this.calendarInstance.next();
  }
  prevTimestamp(): void {
    this.calendarInstance.prev();
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
}
</style>
