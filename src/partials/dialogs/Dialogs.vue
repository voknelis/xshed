<template>
  <div>
    <ConfirmDialog ref="confirmDialog" />
    <NewEventDialog ref="newEventDialog" />
    <EditEventDialog ref="editEventDialog" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConfirmDialog from "./ConfirmDialog.vue";
import NewEventDialog from "./NewEventDialog.vue";
import EditEventDialog from "./EditEventDialog.vue";

@Component({
  components: { ConfirmDialog, NewEventDialog, EditEventDialog },
})
export default class Dialogs extends Vue {
  mounted(): void {
    this.$dialogs.confirm = this.$refs.confirmDialog as ConfirmDialog;
    this.$dialogs.newEventDialog = this.$refs.newEventDialog as NewEventDialog;
    this.$dialogs.editEventDialog = this.$refs.editEventDialog as EditEventDialog;
  }
}
</script>

<style scoped></style>
