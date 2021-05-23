import { STORAGE_KEY } from "@/store/localStorageKeys";
import { CalendarEvent } from "@/entities/CalendarEvent";
import { UserProfile } from "@/entities/UserProfile";
import { uuidv4 } from "@/utils/uuidv4";

const storage = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}") as Partial<RootState>;

const defaultProfile: UserProfile = {
  Id: uuidv4(),
  Title: "Default",
  Color: "#1867c0",
};

export class RootState {
  events: CalendarEvent[] = storage.events || [];
  defaultProfile: UserProfile = defaultProfile;
  profiles: UserProfile[] = storage.profiles || [defaultProfile];
  selectedProfileId: string = storage.selectedProfileId || defaultProfile.Id;
}
