import { Getters } from "vuex-smart-module";
import { RootState } from "./state";
import { CalendarEvent } from "@/entities/CalendarEvent";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { UserProfile } from "@/entities/UserProfile";
import { toLocalDate, toVuetifyDateTime } from "@/utils/toVuetifyDateTime";
import { root } from "@/store";

export class RootGetters extends Getters<RootState> {
  get profileEvents(): CalendarEventParsed[] {
    return this.state.events
      .filter((e) => e.ProfileId === this.state.selectedProfileId)
      .map(mapToVuetifyEvent);
  }
  get events(): CalendarEventParsed[] {
    return this.state.events.map(mapToVuetifyEvent);
  }

  get categories(): string[] {
    const cats = this.state.events.reduce((acc, e) => {
      return acc.add(e.Category);
    }, new Set<string>());
    return [...cats.values()].filter(Boolean);
  }

  get scopes(): string[] {
    const scopes = this.state.events.reduce((acc, e) => {
      return acc.add(e.Scope || "");
    }, new Set<string>());
    return [...scopes.values()].filter(Boolean);
  }

  get userProfile(): UserProfile {
    const id = this.state.selectedProfileId;
    return this.getters.userProfileById(id);
  }
  get userProfileById(): (id: string) => UserProfile {
    return (id: string) => {
      return this.state.profiles.find((p) => p.Id === id) || this.state.defaultProfile;
    };
  }
  get userProfileByTitle(): (title: string) => UserProfile {
    return (title: string) => {
      return this.state.profiles.find((p) => p.Title === title) || this.state.defaultProfile;
    };
  }
}

export const mapToVuetifyEvent = (e: CalendarEvent): CalendarEventParsed => {
  const localStartDate = e.AllDay ? toLocalDate(new Date(e.Start)) : toVuetifyDateTime(new Date(e.Start));
  const localEndDate = e.AllDay ? toLocalDate(new Date(e.End)) : toVuetifyDateTime(new Date(e.End));
  const profile = root.getters.userProfileById(e.ProfileId);

  return {
    id: e.Id,
    name: e.Scope ? `${e.Category}:${e.Scope}` : e.Category,
    start: localStartDate,
    end: localEndDate,
    allDay: !!e.AllDay,
    type: e.Category,
    scope: e.Scope,
    comment: e.Comment,
    category: profile.Title,
  };
};
