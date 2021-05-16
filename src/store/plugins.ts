import { createLogger, Store } from "vuex";
import { STORAGE_KEY } from "@/store/localStorageKeys";
import { RootState } from "@/store/modules/root/state";

const localStoragePlugin: (store: Store<RootState>) => void = (store) => {
  store.subscribe((_, state) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  });
};

export default process.env.NODE_ENV !== "production"
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin];
