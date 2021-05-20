declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  import ConfirmDialog from "@/partials/dialogs/ConfirmDialog";
  import NewEventDialog from "@/partials/dialogs/NewEventDialog";

  interface Vue {
    $dialogs: {
      confirm: ConfirmDialog;
      newEventDialog: NewEventDialog;
    };
  }
}

export {};
