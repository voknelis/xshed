<template>
  <v-btn-toggle
    v-model="view"
    class="calendar-view-switcher"
    borderless
    mandatory
    @change="storeCalendarType"
  >
    <v-btn value="day" text color="grey darken-2">
      <span class="hidden-md-and-down me-1">Day</span>
      <v-icon>mdi-calendar-today</v-icon>
    </v-btn>
    <v-btn value="week" text color="grey darken-2">
      <span class="hidden-md-and-down me-1">Week</span>
      <v-icon>mdi-calendar-range</v-icon>
    </v-btn>
    <v-btn value="month" text color="grey darken-2">
      <span class="hidden-md-and-down me-1">Month</span>
      <v-icon>mdi-calendar-month</v-icon>
    </v-btn>
    <v-btn value="category" text color="grey darken-2">
      <span class="hidden-md-and-down me-1">Profiles</span>
      <v-icon>mdi-select-compare</v-icon>
    </v-btn>
  </v-btn-toggle>
</template>

<script lang="ts">
import { Component, VModel, Vue } from "vue-property-decorator";
import { CalendarView } from "@/entities/CalendarView";
import { CALENDAR_VIEW_KEY } from "@/store/localStorageKeys";

const calendarViewKey = CALENDAR_VIEW_KEY;

@Component
export default class CalendarViewSwitcher extends Vue {
  @VModel() view!: CalendarView;

  created(): void {
    this.restoreCalendarType();
  }

  storeCalendarType(type: CalendarView): void {
    localStorage.setItem(calendarViewKey, type);
  }

  restoreCalendarType(): void {
    this.view = (localStorage.getItem(calendarViewKey) as CalendarView) || "day";
  }
}
</script>

<style scoped></style>
