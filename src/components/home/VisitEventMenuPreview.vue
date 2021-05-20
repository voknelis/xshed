<template>
  <v-card min-width="350px" flat>
    <v-toolbar :color="getEventColor(visit)" dark>
      <v-toolbar-title class="ml-3" v-html="visit.name"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="close">
        <v-icon>mdi-window-close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <div class="mb-2">
        <h3>Comment</h3>
        <div class="subtitle-1">
          {{ getComment }}
        </div>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn elevation="0" color="error" @click="deleteVisitEvent(visit)">
        <v-icon class="mr-2">mdi-delete</v-icon>
        Delete
      </v-btn>
      <v-btn elevation="0" color="primary" @click="openEditDialog(visit)">
        <v-icon class="mr-2">mdi-pencil</v-icon>
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { root } from "@/store";

@Component
export default class VisitEventMenuPreview extends Vue {
  @Prop({ type: Object, required: true }) visit!: CalendarEventParsed;

  get getComment(): string {
    return this.visit.comment ?? "The event comment was not provided";
  }

  getEventColor(event: CalendarEventParsed): string {
    return "#000";
  }

  openEditDialog(e: CalendarEventParsed): void {
    this.$dialogs.editVisitDialog.open(e);
  }

  async deleteVisitEvent(e: CalendarEventParsed): Promise<void> {
    if (e.id) {
      const result = await this.$dialogs.confirm.open(
        "Delete",
        "Are you sure you want to delete this visit?",
        { color: "error" },
      );
      if (result) {
        await root.actions.deleteEvent(e);
        this.close();
      }
    }
  }

  @Emit()
  close(): void {
    return;
  }
}
</script>

<style scoped></style>
