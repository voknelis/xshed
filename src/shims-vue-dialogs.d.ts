declare module "vue/types/vue" {
  import ConfirmDialog from "@/partials/dialogs/ConfirmDialog";

  interface Vue {
    $dialogs: {
      confirm: ConfirmDialog;
    };
  }
}

export {};
