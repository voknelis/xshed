<template>
  <v-app>
    <Navigation />

    <v-main class="mt-4 mx-2">
      <router-view />
    </v-main>

    <Dialogs />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dialogs from "@/partials/dialogs/Dialogs.vue";
import Navigation from "@/partials/Navigation.vue";
import { APP_THEME_KEY } from "@/store/localStorageKeys";

@Component({
  components: { Dialogs, Navigation },
})
export default class App extends Vue {
  mounted(): void {
    this.restoreAppTheme();
  }

  restoreAppTheme(): void {
    const value = localStorage.getItem(APP_THEME_KEY);
    this.$vuetify.theme.dark = !!(value && value === "dark");
  }
}
</script>

<style>
html {
  overflow-y: auto;
}
</style>
