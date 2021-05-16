import { CalendarDaySlotScope } from "vuetify";

export function vuetifyTimestampToUnixTimestamp(tms: CalendarDaySlotScope): number {
  return new Date(tms.year, tms.month - 1, tms.day, tms.hour, tms.minute).getTime();
}
