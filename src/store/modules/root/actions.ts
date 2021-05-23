import { Actions } from "vuex-smart-module";
import { RootState } from "./state";
import { RootGetters } from "./getters";
import { RootMutations } from "./mutations";
import { CalendarEvent } from "@/entities/CalendarEvent";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { uuidv4 } from "@/utils/uuidv4";
import { UserProfile } from "@/entities/UserProfile";

export class RootActions extends Actions<RootState, RootGetters, RootMutations, RootActions> {
  async addEvent(payload: CalendarEvent): Promise<void> {
    this.commit("setEvent", payload);
  }

  async updateEvent(payload: CalendarEvent): Promise<void> {
    this.commit("setEvent", payload);
  }

  async deleteEvent(payload: CalendarEventParsed): Promise<void> {
    this.commit("removeEvent", payload.id);
  }

  async addProfile(payload: Omit<UserProfile, "Id">): Promise<void> {
    const id = uuidv4();
    const profile: UserProfile = {
      Id: id,
      Title: payload.Title,
      Color: payload.Color,
    };
    this.commit("setProfile", profile);
  }
}
