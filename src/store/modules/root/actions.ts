import { Actions } from "vuex-smart-module";
import { RootState } from "./state";
import { RootGetters } from "./getters";
import { RootMutations } from "./mutations";
import { CalendarEvent } from "@/entities/CalendarEvent";

export class RootActions extends Actions<RootState, RootGetters, RootMutations, RootActions> {
  async addEvent(payload: CalendarEvent): Promise<void> {
    this.commit("setEvent", payload);
  }

  async updateEvent(payload: CalendarEvent): Promise<void> {
    this.commit("setEvent", payload);
  }
}
