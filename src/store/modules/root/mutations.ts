import Vue from "vue";
import { Mutations } from "vuex-smart-module";
import { RootState } from "./state";
import { CalendarEvent } from "@/entities/CalendarEvent";
import { UserProfile } from "@/entities/UserProfile";

export class RootMutations extends Mutations<RootState> {
  setEvent(event: CalendarEvent): void {
    const events = this.state.events;
    const index = events.findIndex((e) => e.Id === event.Id);
    if (index !== -1) Vue.set(events, index, event);
    else events.push(event);
  }

  removeEvent(id: string): void {
    const events = this.state.events;
    const index = events.findIndex((e) => e.Id === id);
    if (index !== -1) events.splice(index, 1);
  }

  setProfile(profile: UserProfile): void {
    this.state.profiles.push(profile);
  }

  setSelectedProfile(id: string): void {
    this.state.selectedProfileId = id;
  }

  resetState(): void {
    this.state.profiles = [];
    this.state.events = [];
    this.state.selectedProfileId = "";
  }
  commitState(): void {
    // special method to cause state saving to localStorage
  }
}
