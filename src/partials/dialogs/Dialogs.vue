<template>
  <div>
    <ConfirmDialog ref="confirmDialog" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConfirmDialog from "./ConfirmDialog.vue";

@Component({
  components: { ConfirmDialog },
})
export default class Dialogs extends Vue {
  mounted(): void {
    this.$dialogs.confirm = this.$refs.confirmDialog as ConfirmDialog;
  }
}
</script>

<style scoped></style>
