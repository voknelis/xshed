<template>
  <v-card flat min-width="350px">
    <v-toolbar :class="getTextColorClass" :color="getEventColor">
      <v-toolbar-title class="ml-3" v-text="visit.name"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :dark="isBackgroundWhite" icon @click="close">
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
      <v-btn color="error" elevation="0" @click="deleteVisitEvent(visit)">
        <v-icon class="mr-2">mdi-delete</v-icon>
        Delete
      </v-btn>
      <v-btn color="primary" elevation="0" @click="openEditDialog(visit)">
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
import { isColorWhite } from "@/utils/isColorWhite";
import { stringToHexColor } from "@/utils/stringToHexColor";

@Component
export default class VisitEventMenuPreview extends Vue {
  @Prop({ type: Object, required: true }) visit!: CalendarEventParsed;

  get getComment(): string {
    return this.visit.comment || "The event comment was not provided";
  }

  get getEventColor(): string {
    return this.visit ? stringToHexColor(this.visit.type) : "#222";
  }

  get getTextColorClass(): string {
    const color = isColorWhite(this.getEventColor) ? "white" : "black";
    return `${color}--text`;
  }

  get isBackgroundWhite(): boolean {
    return isColorWhite(this.getEventColor);
  }

  openEditDialog(e: CalendarEventParsed): void {
    this.$dialogs.editEventDialog.open(e);
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
