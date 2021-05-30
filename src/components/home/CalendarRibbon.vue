<template>
  <div class="calendar-ribbon">
    <v-sheet>
      <v-row no-gutters>
        <v-col class="d-flex" cols="12" sm>
          <v-tooltip bottom open-delay="900">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                outlined
                large
                class="mr-2"
                color="grey darken-2"
                @click="openDialog"
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

          <CalendarViewSwitcher v-if="$vuetify.breakpoint.smAndDown" v-model="view" />
        </v-col>

        <v-col cols="12" sm>
          <v-card class="d-flex align-center justify-space-between mx-2 text-truncate" outlined>
            <v-btn class="px-0" text large color="grey darken-2" min-width="40" @click="prevTimestamp">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-menu
              v-model="dateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on" style="letter-spacing: normal; font-weight: normal">
                  <v-toolbar-title class="mx-4" v-if="dateString">
                    {{ dateString }}
                  </v-toolbar-title>
                </v-btn>
              </template>
              <v-date-picker
                v-model="date_"
                :active-picker="datePickerType"
                no-title
                scrollable
                @input="dateMenu = false"
              />
            </v-menu>
            <v-btn class="px-0" text large color="grey darken-2" min-width="40" @click="nextTimestamp">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card>
        </v-col>

        <v-col v-if="$vuetify.breakpoint.mdAndUp">
          <CalendarViewSwitcher v-model="view" class="d-flex justify-end" />
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, PropSync, VModel, Vue } from "vue-property-decorator";
import CalendarViewSwitcher from "@/components/home/CalendarViewSwitcher.vue";
import { CalendarView } from "@/entities/CalendarView";

@Component({
  components: { CalendarViewSwitcher },
})
export default class CalendarRibbon extends Vue {
  @VModel() view!: CalendarView;

  @Prop() dateString?: string;
  @PropSync("date") date_?: string;

  dateMenu = false;

  get datePickerType(): "DATE" | "MONTH" | "YEAR" {
    return this.view === "month" ? "MONTH" : "DATE";
  }

  @Emit()
  nextTimestamp(): void {
    return;
  }

  @Emit()
  prevTimestamp(): void {
    return;
  }

  @Emit()
  toToday(): void {
    return;
  }

  @Emit()
  openDialog(): void {
    return;
  }
}
</script>

<style scoped></style>
