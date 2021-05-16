import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex-smart-module";
import plugins from "@/store/plugins";
import rootModule from "./modules/root";

Vue.use(Vuex);

export const STORAGE_KEY = "xshed.storage";

export const store = createStore(rootModule, { plugins });
export const root = rootModule.context(store);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
