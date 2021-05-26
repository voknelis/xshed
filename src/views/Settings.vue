<template>
  <v-container>
    <SettingsSessionManagement />
    <SettingsDataManagement class="mt-4" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SettingsDataManagement from "@/partials/settings/SettingsDataManagement.vue";
import SettingsSessionManagement from "@/partials/settings/SettingsSessionManagement.vue";

@Component({
  components: { SettingsDataManagement, SettingsSessionManagement },
})
export default class Settings extends Vue {}
</script>

<style scoped></style>
