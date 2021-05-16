<template>
  <v-dialog v-model="model" :fullscreen="fullscreenModal" max-width="700px">
    <NewVisit
      v-if="model"
      :timestamp="timestamp"
      :event="event"
      :loading="loading"
      @close="close"
      @save="onEventSave"
    />
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CalendarDaySlotScope } from "vuetify";
import NewVisit from "@/components/NewVisit.vue";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { CalendarEvent } from "@/entities/CalendarEvent";

@Component({
  components: { NewVisit },
})
export default class NewEventDialog extends Vue {
  model = false;
  timestamp?: CalendarDaySlotScope | null = null;
  event?: Partial<CalendarEventParsed> | null = null;
  loading = false;

  get fullscreenModal(): boolean {
    return this.$vuetify.breakpoint.smAndDown;
  }

  open(param?: CalendarDaySlotScope | Partial<CalendarEventParsed>): void {
    if (param) {
      if ((param as CalendarEventParsed).start) {
        this.event = param as Partial<CalendarEventParsed>;
      } else {
        this.timestamp = param as CalendarDaySlotScope;
      }
    }
    this.model = true;
  }

  close(): void {
    this.model = false;
    this.timestamp = undefined;
  }

  async onEventSave(e?: Partial<CalendarEvent>): Promise<void> {
    if (!e) return;

    this.loading = true;
    try {
      await this.$store.dispatch("addEvent", e);
      this.model = false;
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped></style>
