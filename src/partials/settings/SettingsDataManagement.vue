<template>
  <v-sheet class="settings-data-management py-4 px-6" elevation="1">
    <v-form>
      <h2>Data management</h2>
      <br />

      <div>
        All you data (events, profiles, etc.) is stored locally in browser's localStorage.
        <br />
        Data security is being provided and managed by the browser.
        <br />
        <a ref="https://developer.mozilla.org/docs/Web/API/Window/localStorage">Learn more</a>
      </div>

      <div class="mt-5">
        <div class="text--secondary">You can remove all your data here</div>
        <v-btn class="mt-2" color="error" @click="deleteData">Delete all data</v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { root } from "@/store";

@Component
export default class SettingsDataManagement extends Vue {
  async deleteData(): Promise<void> {
    const message = `All your data will be permanently deleted`;
    const r = await this.$dialogs.confirm.open("Delete data", message, { color: "error" });
    if (r) {
      await root.actions.cleanUpData();
      await this.$router.push({ name: "Home" });
      window.location.reload();
    }
  }
}
</script>

<style lang="sass">
@import "~vuetify/src/styles/settings/colors"

.settings-data-management.theme--light
  background-color: map-get($grey, lighten-5)
</style>
