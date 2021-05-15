<template>
  <v-app-bar app dense elevation="3">
    <div class="d-flex w-100" :class="{ container: this.$vuetify.breakpoint.lgAndUp }">
      <v-btn class="btn-black" tile icon fab exact :to="{ name: 'Home' }">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-spacer />

      <v-btn class="btn-black" icon tile @click="toggleAppTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <v-btn class="btn-black" icon tile exact :to="{ name: 'Settings' }">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {
  toggleAppTheme() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    const value = this.$vuetify.theme.dark ? "dark" : "light";
    localStorage.setItem("xshed.app-theme", value);
  }
}
</script>

<style scoped>
.w-100 {
  width: 100%;
}
</style>
