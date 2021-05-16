export function toLocalISODateTime(d: Date, offset?: number): string {
  const date = d ?? new Date();
  // https://stackoverflow.com/questions/10830357/javascript-toisostring-ignores-timezone-offset
  const offset_ = (offset ? offset : date.getTimezoneOffset()) * 60000; //offset in milliseconds
  return new Date(date.getTime() - offset_).toISOString().slice(0, -1);
}

export function toVuetifyDateTime(d: Date): string {
  const dateString = toLocalISODateTime(d);
  const [date, time] = dateString.split(".")[0].replace("T", " ").split(" ");
  const shortTime = time.slice(0, 5); // cut of seconds
  return [date, shortTime].join(" ");
}

export function toLocalDate(d: Date): string {
  const dateString = toLocalISODateTime(d);
  return dateString.slice(0, 10);
}
