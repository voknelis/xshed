<template>
  <div>
    <ConfirmDialog ref="confirmDialog" />
    <NewEventDialog ref="newEventDialog" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConfirmDialog from "./ConfirmDialog.vue";
import NewEventDialog from "./NewEventDialog.vue";

@Component({
  components: { ConfirmDialog, NewEventDialog },
})
export default class Dialogs extends Vue {
  mounted(): void {
    this.$dialogs.confirm = this.$refs.confirmDialog as ConfirmDialog;
    this.$dialogs.newEventDialog = this.$refs.newEventDialog as NewEventDialog;
  }
}
</script>

<style scoped></style>
