<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn icon fab v-bind="attrs" v-on="on">
        <v-avatar color="primary" size="40">
          <span class="white--text text-subtitle-1">{{ userInitials(selectedProfile.Title) }}</span>
        </v-avatar>
      </v-btn>
    </template>

    <v-list nav>
      <v-list-item-group v-model="selectedItem" color="primary">
        <template v-for="p in userProfiles">
          <v-list-item :key="p.Id">
            <v-list-item-avatar>
              <v-avatar :color="p.Color" size="40">
                <span class="white--text text-subtitle-1">{{ userInitials(p.Title) }}</span>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>{{ p.Title }}</v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>

      <v-list-item link @click="addProfile">
        <v-list-item-avatar>
          <v-icon>mdi-plus</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>Add</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserProfile } from "@/entities/UserProfile";
import { root } from "@/store";
import { getUserInitials } from "@/utils/getUserInitials";

@Component
export default class UserAccounts extends Vue {
  selectedItem = "";

  get userProfiles(): UserProfile[] {
    return root.state.profiles;
  }
  get selectedProfile(): UserProfile {
    return root.getters.userProfile;
  }

  userInitials(s: string): string {
    return getUserInitials(s);
  }

  addProfile(): void {
    this.$dialogs.profileDialog.open();
  }
}
</script>

<style scoped></style>
