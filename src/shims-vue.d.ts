declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  import NewEventDialog from "@/partials/dialogs/NewEventDialog";

  interface Vue {
    $dialogs: {
      newEventDialog: NewEventDialog;
    };
  }
}

export {};
