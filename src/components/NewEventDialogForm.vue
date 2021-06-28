<template>
  <v-card>
    <v-card-title>Create visit event</v-card-title>
    <v-card-text>
      <v-container>
        <v-form v-model="formModel" ref="form">
          <v-row>
            <v-col>
              <v-menu
                ref="menu"
                v-model="menu"
                transition="scale-transition"
                offset-y
                min-width="auto"
                :close-on-content-click="false"
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
                label="Start time"
                prepend-icon="mdi-clock-time-two-outline"
                :items="visitTimeItems"
              />
            </v-col>
            <v-col>
              <v-autocomplete
                v-model="endTime"
                label="End time"
                prepend-icon="mdi-clock-time-five-outline"
                :items="visitTimeItems"
                :rules="[(v) => v > startTime || 'End time should be greater than Start time']"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-combobox
                ref="categoryCombobox"
                label="Category"
                prepend-icon="mdi-tune-variant"
                :items="categories"
                :rules="validation.category"
                @update:search-input="updateComboboxInput('category', $event)"
              ></v-combobox>
            </v-col>
            <v-col>
              <v-combobox
                label="Scope"
                prepend-icon="mdi-tune"
                :items="scopes"
                @update:search-input="updateComboboxInput('scope', $event)"
              ></v-combobox>
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

    <v-divider />

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue" text @click="closeDialog">Close</v-btn>
      <v-btn color="primary" :disabled="!formModel" :loading="loading" @click="save">Create</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import { CalendarDaySlotScope } from "vuetify";
import { CalendarEvent } from "@/entities/CalendarEvent";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { UserProfile } from "@/entities/UserProfile";
import { root } from "@/store";
import { requiredRule } from "@/utils/formValidationRules";
import { addMinutes, getTimeStringRange } from "@/utils/getRangeTimeItems";
import { toLocalISODateTime } from "@/utils/toVuetifyDateTime";
import { uuidv4 } from "@/utils/uuidv4";

type VForm = { validate: () => boolean };
type VCombobox = { focus: () => void };

@Component
export default class NewEventDialogForm extends Vue {
  formModel = false;
  menu = false;

  startDate = this.getLocalISODate();
  startDateFormatted = this.formatDate(this.getLocalISODate());
  startTime = "";
  endTime = "";
  allDay = false;
  profile: UserProfile = root.getters.userProfile;
  category? = "";
  scope? = "";
  comment? = "";

  validation = {
    category: [requiredRule("Category")],
  };

  /* Initial timestamp */
  @Prop({ required: false, type: Object }) timestamp?: CalendarDaySlotScope;
  @Prop({ required: false, type: Object }) event?: Partial<CalendarEventParsed>;
  @Prop({ required: false, type: Array }) categories!: string[];
  @Prop({ required: false, type: Array }) scopes!: string[];
  @Prop({ required: false, type: Array }) profiles!: UserProfile[];
  @Prop({ type: Boolean }) loading!: boolean;
  @Prop({ type: Boolean }) isAdmin!: boolean;

  @Watch("startDate")
  startDateUpdate(): void {
    this.startDateFormatted = this.formatDate(this.startDate);
  }

  @Ref("categoryCombobox") categoryCombobox!: VCombobox;

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

  created(): void {
    const currentDate = new Date();

    const toLocaleString = (n: number) => {
      return n.toLocaleString("default", { minimumIntegerDigits: 2 });
    };
    const interval = 15;

    if (this.timestamp) {
      this.startDate = this.timestamp.date;

      this.startTime = `${toLocaleString(this.timestamp.hour)}:00`;
      const end = addMinutes(
        new Date(`${this.startDate} ${toLocaleString(this.timestamp.hour)}:00`),
        interval,
      );
      this.endTime = `${toLocaleString(end.getHours())}:${toLocaleString(end.getMinutes())}`;
      return;
    }
    if (this.event) {
      const [startDate, startTime] = this.event.start!.split(" ");
      this.startDate = startDate;
      this.startTime = startTime;

      const [_, endTime] = this.event.end!.split(" ");
      this.endTime = endTime;

      this.category = this.event.type;
      this.scope = this.event.scope;
      this.comment = this.event.comment;

      if (this.event.category) {
        this.profile = root.getters.userProfileByTitle(this.event.category);
      }

      return;
    }

    this.startDate = currentDate.toISOString().substr(0, 10);

    this.startTime = `${toLocaleString(currentDate.getHours())}:00`;
    const end = addMinutes(
      new Date(`${this.startDate} ${toLocaleString(currentDate.getHours())}:00`),
      interval,
    );
    this.endTime = `${toLocaleString(end.getHours())}:${toLocaleString(end.getMinutes())}`;
  }

  mounted(): void {
    this.focusCategoryCombobox();
  }

  focusCategoryCombobox(): void {
    // the only one way to consistently autofocus element
    // by default, the elements gets autofocused with the first modal opening
    // see: https://stackoverflow.com/questions/51472947/vuetifys-autofocus-works-only-on-first-modal-open
    setTimeout(() => this.categoryCombobox.focus());
  }

  makeDateTime(date: string, time: string): string {
    return `${date} ${time}`;
  }

  @Emit("close")
  closeDialog(): void {
    return;
  }

  @Emit()
  save(): CalendarEvent | null {
    if (!this.form.validate()) return null;

    const startTime = this.allDay ? "00:00" : this.startTime;
    const endTime = this.allDay ? "23:59" : this.endTime;
    return {
      Id: uuidv4(),
      Start: this.makeDateTime(this.startDate, startTime),
      End: this.makeDateTime(this.startDate, endTime),
      AllDay: this.allDay,
      Category: this.category!,
      Scope: this.scope,
      Comment: this.comment,
      ProfileId: this.profile?.Id,
    };
  }

  getLocalISODate(): string {
    const localISODate = toLocalISODateTime(new Date());
    return localISODate.substr(0, 10);
  }

  /**
   * This method used to implement v-combobox validation on change.
   * See https://github.com/vuetifyjs/vuetify/issues/4679 for more information.
   */
  updateComboboxInput(prop: string, value: string): void {
    this[prop] = value;
  }
}
</script>

<style scoped></style>
