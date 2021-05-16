<template>
  <div>
    <NewEventDialog ref="newEventDialog" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewEventDialog from "./NewEventDialog.vue";

@Component({
  components: { NewEventDialog },
})
export default class Dialogs extends Vue {
  mounted() {
    this.$dialogs.newEventDialog = this.$refs.newEventDialog as NewEventDialog;
  }
}
</script>

<style scoped></style>
