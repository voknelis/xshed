<template>
  <div class="home" :class="{ container: this.$vuetify.breakpoint.lgAndUp }">
    <Calendar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Calendar from "@/partials/home/Calendar.vue";

@Component({
  components: { Calendar },
})
export default class Home extends Vue {}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
}
</style>
