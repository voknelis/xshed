export function roundTime(time: number, options: { down?: boolean; roundTo?: number }): number {
  const defaultOpts = { down: false, roundTo: 60 };
  const { down, roundTo } = { ...defaultOpts, ...options };

  const roundDownTime = roundTo * 60 * 1000;
  return down ? time - (time % roundDownTime) : time + (roundDownTime - (time % roundDownTime));
}
