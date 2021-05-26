<template>
  <v-sheet class="settings-session-management py-4 px-6" elevation="1">
    <v-form>
      <h2>Session management</h2>
      <br />

      <div class="text--secondary">Export your current session</div>
      <v-btn class="mt-2" color="primary" @click="exportData">Export</v-btn>

      <div class="text--secondary mt-8">Import your session from file</div>
      <v-file-input clearable placeholder="Select file" accept="application/json" @change="importData" />

      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-toolbar dark color="error" dense flat>
            <v-toolbar-title class="white--text">Data merge request</v-toolbar-title>
          </v-toolbar>

          <v-card-text class="pa-4">
            Do you what to merge you data with current session or overwrite it?
          </v-card-text>

          <v-card-actions class="pt-0">
            <v-spacer></v-spacer>

            <v-btn color="primary darken-1" @click="overwriteData">Overwrite</v-btn>
            <v-btn color="primary" @click="mergeData">Merge</v-btn>
            <v-btn color="grey" text @click="cancelImport">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { saveAs } from "file-saver";
import { Component, Vue } from "vue-property-decorator";
import { root } from "@/store";

@Component
export default class SettingsSessionManagement extends Vue {
  dialog = false;
  importData_: any = null;

  exportData(): void {
    const json = JSON.stringify(root.state);
    const blob = new Blob([json], { type: "application/json;charset=utf-8" });

    const fileName = `xshed export ${new Date().toLocaleString()}.json`;
    saveAs(blob, fileName);
  }

  async importData(file?: Blob): Promise<void> {
    if (file) {
      const storage = await this.parseFile(file);
      this.importData_ = JSON.parse(storage);
      this.dialog = true;
    }
  }

  parseFile(file: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function onload(e) {
        resolve((e.target?.result as string) || "");
      };
      reader.onerror = function onerror(e) {
        reject(e);
      };
      reader.readAsText(file, "UTF-8");
    });
  }

  async overwriteData(): Promise<void> {
    await root.actions.importDataWithOverwrite(this.importData_);
    this.dialog = false;
  }

  async mergeData(): Promise<void> {
    await root.actions.importData(this.importData_);
    this.dialog = false;
  }

  cancelImport(): void {
    this.importData_ = null;
    this.dialog = false;
  }
}
</script>

<style lang="sass">
@import "~vuetify/src/styles/settings/colors"

.settings-session-management.theme--light
  background-color: map-get($grey, lighten-5)
</style>
