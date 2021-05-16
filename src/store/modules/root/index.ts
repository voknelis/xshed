import { Module } from "vuex-smart-module";
import { RootState } from "./state";
import { RootGetters } from "./getters";
import { RootMutations } from "./mutations";
import { RootActions } from "./actions";
import { modules } from "./modules";

const root = new Module({
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
  modules,
});

export default root;
