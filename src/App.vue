<template>
  <v-app>
    <Navigation />

    <v-main class="mt-4 mx-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/partials/Navigation.vue";

export default Vue.extend({
  name: "App",
  components: { Navigation },
  data: () => ({
    //
  }),
});
</script>

<style>
html {
  overflow-y: auto;
}
</style>
