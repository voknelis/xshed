declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  import AddProfileDialog from "@/partials/dialogs/AddProfileDialog";
  import ConfirmDialog from "@/partials/dialogs/ConfirmDialog";
  import NewEventDialog from "@/partials/dialogs/NewEventDialog";
  import EditEventDialog from "@/partials/dialogs/EditEventDialog";

  interface Vue {
    $dialogs: {
      profileDialog: AddProfileDialog;
      confirm: ConfirmDialog;
      newEventDialog: NewEventDialog;
      editEventDialog: EditEventDialog;
    };
  }
}

export {};
