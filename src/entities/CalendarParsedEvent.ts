export interface CalendarDefaultParsedEvent {
  name: string;
  start: string;
  end?: string;
  allDay?: boolean;
}

export interface CalendarEventParsed extends CalendarDefaultParsedEvent {
  id: string;
  category: string;
  scope?: string;
  comment?: string;
}
