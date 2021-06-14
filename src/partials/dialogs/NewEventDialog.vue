<template>
  <v-dialog v-model="model" :fullscreen="fullscreenModal" max-width="700px">
    <NewEventDialogForm
      v-if="model"
      :timestamp="timestamp"
      :event="event"
      :loading="loading"
      :categories="categories"
      :scopes="scopes"
      :profiles="profiles"
      @close="close"
      @save="onEventSave"
    />
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CalendarDaySlotScope } from "vuetify";
import NewEventDialogForm from "@/components/NewEventDialogForm.vue";
import { CalendarEvent } from "@/entities/CalendarEvent";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { UserProfile } from "@/entities/UserProfile";
import { root } from "@/store";

@Component({
  components: { NewEventDialogForm },
})
export default class NewEventDialog extends Vue {
  model = false;
  timestamp?: CalendarDaySlotScope | null = null;
  event?: Partial<CalendarEventParsed> | null = null;
  loading = false;

  get fullscreenModal(): boolean {
    return this.$vuetify.breakpoint.smAndDown;
  }

  get categories(): string[] {
    return root.getters.categories;
  }

  get scopes(): string[] {
    return root.getters.scopes;
  }

  get profiles(): UserProfile[] {
    return root.state.profiles;
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

  async onEventSave(e?: CalendarEvent): Promise<void> {
    if (!e) return;

    this.loading = true;
    try {
      await root.actions.addEvent(e);
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
