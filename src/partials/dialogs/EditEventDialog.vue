<template>
  <v-dialog v-model="model" :fullscreen="fullscreenModal" max-width="700px">
    <EditEvent
      v-if="model && event"
      :event="event"
      :loading="loading"
      :categories="categories"
      :scopes="scopes"
      :profiles="profiles"
      @save="onEventUpdate"
    />
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditEvent from "@/components/EditEvent.vue";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { root } from "@/store";
import { CalendarEvent } from "@/entities/CalendarEvent";
import { UserProfile } from "@/entities/UserProfile";

@Component({
  components: { EditEvent },
})
export default class EditEventDialog extends Vue {
  model = false;
  event: CalendarEventParsed | null = null;
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

  open(event: CalendarEventParsed): void {
    this.event = { ...event };
    this.model = true;
  }

  close(): void {
    this.model = false;
    this.event = null;
  }

  async onEventUpdate(e?: CalendarEvent): Promise<void> {
    if (!e) return;
    this.loading = true;
    try {
      await root.actions.updateEvent(e);
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
