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

      <UserAccounts @add-profile="openProfileDialog" />
    </div>

    <AddProfileDialog ref="addProfileDialog" />
  </v-app-bar>
</template>

<script lang="ts">
import AddProfileDialog from "@/partials/dialogs/AddProfileDialog.vue";
import { Component, Ref, Vue } from "vue-property-decorator";
import UserAccounts from "@/partials/navigation/UserAccounts.vue";
import { APP_THEME_KEY } from "@/store/localStorageKeys";

@Component({
  components: { AddProfileDialog, UserAccounts },
})
export default class Navigation extends Vue {
  @Ref("addProfileDialog") addProfileDialog!: AddProfileDialog;

  openProfileDialog(): void {
    this.addProfileDialog.open();
  }

  toggleAppTheme(): void {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    const value = this.$vuetify.theme.dark ? "dark" : "light";
    localStorage.setItem(APP_THEME_KEY, value);
  }
}
</script>

<style scoped>
.w-100 {
  width: 100%;
}
</style>
