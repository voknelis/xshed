export function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60000);
}

/**
 * Returns time string format hh:mm
 * @param date
 */
export function getTimeAsString(date: Date): string {
  const options = { timeStyle: "short", hour12: false } as unknown as Intl.DateTimeFormatOptions;
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

/**
 * Returns range of time items
 * @param start  time as hh:mm format
 * @param end  time as hh:mm format
 * @param minutesOffset time between previous and next items
 */
export function getTimeStringRange(start: string, end: string, minutesOffset = 15): string[] {
  let date = new Date();

  const [startHour, startMinute] = start.split(":");
  date.setHours(Number(startHour), Number(startMinute), 0, 0);

  const result: string[] = [];
  while (getTimeAsString(date) <= end) {
    result.push(getTimeAsString(date));
    date = addMinutes(date, minutesOffset);
  }
  return result;
}
