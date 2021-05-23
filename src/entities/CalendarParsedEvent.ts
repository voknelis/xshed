export interface CalendarDefaultParsedEvent {
  name: string;
  start: string;
  end?: string;
  allDay?: boolean;
}

export interface CalendarEventParsed extends CalendarDefaultParsedEvent {
  id: string;
  type: string;
  scope?: string;
  comment?: string;
  category: string;
}
