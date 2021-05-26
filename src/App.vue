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

@Component({
  components: { Dialogs, Navigation },
})
export default class App extends Vue {}
</script>

<style>
html {
  overflow-y: auto;
}
</style>
