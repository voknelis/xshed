<template>
  <div>
    <ConfirmDialog ref="confirmDialog" />
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import ConfirmDialog from "./ConfirmDialog.vue";

@Component({
  components: { ConfirmDialog },
})
export default class Dialogs extends Vue {
  @Ref("confirmDialog") confirmDialog!: ConfirmDialog;

  mounted(): void {
    this.$dialogs.confirm = this.confirmDialog;
  }
}
</script>

<style scoped></style>
