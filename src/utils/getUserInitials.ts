/**
 * Extracts initials from person name
 * https://stackoverflow.com/questions/33076177/getting-name-initials-using-js/33076482#33076482
 */
export function getUserInitials(name: string): string {
  const rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
  const initials = [...name.matchAll(rgx)] || [];

  return ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();
}
