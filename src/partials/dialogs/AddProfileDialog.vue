<template>
  <v-dialog
    v-model="dialog"
    content-class="add-profile-dialog"
    :fullscreen="$vuetify.breakpoint.smAndDown"
    max-width="700px"
    @keydown.esc="close"
  >
    <v-sheet class="pb-4">
      <v-sheet :dark="isBackgroundWhite">
        <div class="dialog-title" :style="{ backgroundColor: profile.Color }">
          <div class="text-center text-h5">Customize your profiles</div>
          <v-avatar class="default-avatar" size="80" :color="profile.Color">
            <v-icon large>mdi-account</v-icon>
          </v-avatar>
        </div>
      </v-sheet>

      <div class="d-flex flex-column mt-16 mx-4">
        <v-text-field
          v-model="profile.Title"
          filled
          autofocus
          placeholder="Add a name or a label like Work or Personal"
        />

        <v-card class="mx-auto" elevation="0" outlined>
          <v-card-subtitle class="pb-0">Pick a theme color</v-card-subtitle>
          <v-color-picker
            v-model="profile.Color"
            class="color-picker"
            mode="hexa"
            hide-canvas
            hide-inputs
            hide-sliders
            show-swatches
            swatches-max-height="300px"
          />
        </v-card>

        <div class="d-flex justify-end mt-4">
          <v-btn color="primary" :disabled="!profile.Title" @click="save">Done</v-btn>
        </div>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @ts-ignore
import { fromHex } from "vuetify/es5/components/VColorPicker/util";
// @ts-ignore
import { contrastRatio } from "vuetify/es5/util/colorUtils";
import { root } from "@/store";
import { UserProfile } from "@/entities/UserProfile";

const white = fromHex("#FFFFFF").rgba;

@Component
export default class AddProfileDialog extends Vue {
  dialog = false;

  profile = this.getDefaultProfile();

  get isBackgroundWhite(): boolean {
    return contrastRatio(fromHex(this.profile.Color).rgba, white) > 2;
  }

  open(): void {
    this.dialog = true;

    this.profile = this.getDefaultProfile();
  }

  getDefaultProfile(): Omit<UserProfile, "Id"> {
    return {
      Title: "",
      Color: "#1976d2",
    };
  }

  async save(): Promise<void> {
    await root.actions.addProfile(this.profile);
    this.close();
  }

  close(): void {
    this.dialog = false;
  }
}
</script>

<style scoped>
.dialog-title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
}
.default-avatar {
  position: absolute;
  bottom: -40px;
  left: calc(50% - 40px);
  border: 1px solid #444 !important;
}
</style>

<style lang="scss">
.add-profile-dialog {
  .color-picker {
    max-width: 400px !important;
  }
  .v-color-picker__color {
    height: 45px;
    max-height: 45px;
    border-radius: 50%;
  }
}
</style>
