import { STORAGE_KEY } from "@/store/localStorageKeys";
import { CalendarEvent } from "@/entities/CalendarEvent";

const storage = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}") as Partial<RootState>;

export class RootState {
  events: CalendarEvent[] = storage.events || [];
}
