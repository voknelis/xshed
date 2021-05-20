<template>
  <v-dialog v-model="dialog" :max-width="options.width" @keydown.esc="cancel">
    <v-card>
      <v-toolbar dark :color="options.color" dense flat>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>

      <v-card-text v-show="!!message" class="pa-4">{{ message }}</v-card-text>

      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>

        <v-btn color="primary darken-1" text @click.native="confirm">Yes</v-btn>
        <v-btn color="grey" text @click.native="cancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

type ConfirmDialogOptions = {
  color: string;
  width: number;
};

@Component
export default class ConfirmDialog extends Vue {
  dialog = false;
  resolve: ((value: boolean) => void) | null = null;
  reject: ((reason: any) => void) | null = null;
  message: string | null = null;
  title: string | null = null;
  options: ConfirmDialogOptions = this.getDefaultOptions();

  @Watch("dialog")
  onDialogChanged(newVal: boolean): void {
    if (!newVal) {
      this.options = this.getDefaultOptions();
    }
  }

  open(title: string, message: string, options: ConfirmDialogOptions): Promise<boolean> {
    this.dialog = true;
    this.title = title;
    this.message = message;
    this.options = Object.assign(this.options, options);
    return new Promise<boolean>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  confirm(): void {
    this.resolve && this.resolve(true);
    this.dialog = false;
  }

  cancel(): void {
    this.resolve && this.resolve(false);
    this.dialog = false;
  }

  getDefaultOptions(): ConfirmDialogOptions {
    return {
      color: "primary",
      width: 290,
    };
  }
}
</script>

<style scoped></style>
