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
    const profileId = payload.ProfileId || this.getters.userProfile.Id;
    const event: CalendarEvent = { ...payload, ProfileId: profileId };
    this.commit("setEvent", event);
  }

  async updateEvent(payload: CalendarEvent): Promise<void> {
    this.commit("setEvent", payload);
  }
  async updatePartialEvent(payload: Partial<CalendarEvent>): Promise<void> {
    const index = this.state.events.findIndex((e) => e.Id === payload.Id!);
    if (index >= 0) {
      const originalEvent = this.state.events[index];
      const event = { ...originalEvent, ...payload };
      this.commit("setEvent", event);
    }
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

  async cleanUpData(): Promise<void> {
    this.commit("resetState");
    localStorage.clear();
  }

  async importDataWithOverwrite(payload: Partial<RootState>): Promise<void> {
    this.state.events = payload.events || [];
    this.state.profiles = payload.profiles || [];
    this.state.defaultProfile = payload.defaultProfile!;
    this.state.selectedProfileId = payload.selectedProfileId || payload.defaultProfile!.Id;
    this.commit("commitState");
  }

  async importData(payload: Partial<RootState>): Promise<void> {
    this.state.events = [...this.state.events, ...(payload.events || [])];
    this.state.profiles = [...this.state.profiles, ...(payload.profiles || [])];
    this.commit("commitState");
  }
}
