export interface CalendarEvent {
  Id: string;
  Start: string;
  End: string;
  AllDay?: boolean;
  Category: string;
  Scope?: string;
  Comment?: string;
}
