<template>
  <div class="calendar-ribbon">
    <v-sheet height="64">
      <v-toolbar flat>
        <v-tooltip bottom open-delay="900">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              outlined
              large
              class="mr-2"
              color="grey darken-2"
              @click="openEventForm"
            >
              <v-icon>mdi-calendar-plus</v-icon>
              <span class="hidden-sm-and-down ms-1">Add event</span>
            </v-btn>
          </template>
          <span>Add office visit</span>
        </v-tooltip>
        <v-tooltip bottom open-delay="900">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" outlined large color="grey darken-2" @click="toToday">
              <v-icon>mdi-calendar-cursor</v-icon>
              <span class="hidden-md-and-down ms-1">Show today</span>
            </v-btn>
          </template>
          <span>Move to today date</span>
        </v-tooltip>

        <v-spacer />

        <v-card class="d-flex align-center mx-4 text-truncate" outlined>
          <v-btn class="px-0" text large color="grey darken-2" min-width="40" @click="prevTimestamp">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-toolbar-title class="mx-4" v-if="date">
            {{ date }}
          </v-toolbar-title>
          <v-btn class="px-0" text large color="grey darken-2" min-width="40" @click="nextTimestamp">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card>

        <v-spacer />

        <CalendarViewSwitcher v-model="view" />
      </v-toolbar>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, VModel, Vue } from "vue-property-decorator";
import CalendarViewSwitcher from "@/components/home/CalendarViewSwitcher.vue";
import { CalendarView } from "@/entities/CalendarView";

@Component({
  components: { CalendarViewSwitcher },
})
export default class CalendarRibbon extends Vue {
  @VModel() view!: CalendarView;

  @Prop() date?: string;

  @Emit()
  nextTimestamp() {
    return;
  }

  @Emit()
  prevTimestamp() {
    return;
  }

  @Emit()
  toToday() {
    return;
  }

  openEventForm() {
    // TODO: call event form
  }
}
</script>

<style scoped></style>
