<template>
  <v-card>
    <v-card-title>Edit event</v-card-title>
    <v-card-text>
      <v-container>
        <v-form v-model="formModel" ref="form">
          <v-row>
            <v-col>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="startDateFormatted"
                    label="Start date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    @blur="startDate = parseDate(startDateFormatted)"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="startDate" no-title scrollable @input="menu = false">
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(startDate)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-switch v-model="allDay" label="All day visit"></v-switch>
            </v-col>
          </v-row>

          <v-row v-if="!allDay">
            <v-col>
              <v-autocomplete
                v-model="startTime"
                :items="visitTimeItems"
                prepend-icon="mdi-clock-time-two-outline"
                label="Start time"
              />
            </v-col>
            <v-col>
              <v-autocomplete
                v-model="endTime"
                :items="visitTimeItems"
                :rules="[(v) => v > startTime || 'End time should be greater than start time']"
                prepend-icon="mdi-clock-time-five-outline"
                label="End time"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-combobox
                v-model="category"
                :rules="[(v) => !!v || 'Category field is mandatory']"
                :items="categories"
                prepend-icon="mdi-tune-variant"
                label="Category"
              ></v-combobox>
            </v-col>
            <v-col>
              <v-combobox v-model="scope" :items="scopes" prepend-icon="mdi-tune" label="Scope"></v-combobox>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-autocomplete
                v-model="profile"
                :items="profiles"
                item-text="Title"
                return-object
                prepend-icon="mdi-account"
                label="Profile"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-textarea
                v-model="comment"
                label="Comment"
                counter
                rows="3"
                auto-grow
                prepend-icon="mdi-message-reply-text-outline"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue" text @click="closeDialog">Close</v-btn>
      <v-btn color="primary" :disabled="!formModel" :loading="loading" @click="save">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch, Emit, Prop } from "vue-property-decorator";
import { CalendarEvent } from "@/entities/CalendarEvent";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { UserProfile } from "@/entities/UserProfile";
import { getTimeStringRange } from "@/utils/getRangeTimeItems";
import { root } from "@/store";

type VForm = { validate: () => boolean };

@Component
export default class EditEvent extends Vue {
  @Prop({ required: false, type: Object }) event!: CalendarEventParsed;
  @Prop({ required: false, type: Array }) categories!: string[];
  @Prop({ required: false, type: Array }) scopes!: string[];
  @Prop({ required: false, type: Array }) profiles!: UserProfile[];
  @Prop({ type: Boolean }) loading!: boolean;
  @Prop({ type: Boolean }) isAdmin!: boolean;

  formModel = false;
  menu = false;

  startDate = this.getDateString(this.event.start);
  startDateFormatted = this.formatDate(this.startDate);
  startTime = this.getTimeString(this.event.start);
  endTime = this.getTimeString(this.event.end || "");
  allDay = this.event.allDay;
  category = this.event.type || "";
  scope = this.event.scope || "";
  comment = this.event.comment || "";
  profile: UserProfile = root.getters.userProfileByTitle(this.event.category);

  @Watch("startDate")
  startDateUpdate(): void {
    this.startDateFormatted = this.formatDate(this.startDate);
  }

  get form(): VForm {
    return this.$refs.form as unknown as VForm;
  }

  get visitTimeItems(): string[] {
    const startHours = "7:00";
    const endHours = "20:00";
    const interval = 15;
    return getTimeStringRange(startHours, endHours, interval);
  }

  formatDate(date: string | null): string {
    if (!date) return "";

    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }

  parseDate(date: string | null): string {
    if (!date) return "";

    const [day, month, year] = date.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  getDateString(d: string): string {
    return d.substr(0, 10);
  }

  getTimeString(d: string): string {
    return d.substr(11, 5);
  }

  makeDateTime(date: string, time: string): string {
    return `${date} ${time}`;
  }

  @Emit("close")
  closeDialog(): void {
    return;
  }

  @Emit()
  save(): CalendarEvent | void {
    if (!this.form.validate()) return;

    const startTime = this.allDay ? "00:00" : this.startTime;
    const endTime = this.allDay ? "23:59" : this.endTime;
    return {
      Id: this.event.id,
      Start: this.makeDateTime(this.startDate, startTime),
      End: this.makeDateTime(this.startDate, endTime),
      AllDay: this.allDay,
      Category: this.category,
      Scope: this.scope,
      Comment: this.comment,
      ProfileId: this.profile?.Id,
    };
  }
}
</script>

<style scoped></style>
