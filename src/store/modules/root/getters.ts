import { Getters } from "vuex-smart-module";
import { RootState } from "./state";
import { CalendarEvent } from "@/entities/CalendarEvent";
import { CalendarEventParsed } from "@/entities/CalendarParsedEvent";
import { toLocalDate, toVuetifyDateTime } from "@/utils/toVuetifyDateTime";

export class RootGetters extends Getters<RootState> {
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
}

export const mapToVuetifyEvent = (e: CalendarEvent): CalendarEventParsed => {
  const localStartDate = e.AllDay ? toLocalDate(new Date(e.Start)) : toVuetifyDateTime(new Date(e.Start));
  const localEndDate = e.AllDay ? toLocalDate(new Date(e.End)) : toVuetifyDateTime(new Date(e.End));

  return {
    id: e.Id,
    name: e.Scope ? `${e.Category}:${e.Scope}` : e.Category,
    start: localStartDate,
    end: localEndDate,
    allDay: !!e.AllDay,
    category: e.Category,
    scope: e.Scope,
    comment: e.Comment,
  };
};
