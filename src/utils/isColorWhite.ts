// @ts-ignore
import { fromHex } from "vuetify/lib/components/VColorPicker/util";
// @ts-ignore
import { contrastRatio } from "vuetify/lib/util/colorUtils";

const white = fromHex("#FFFFFF").rgba;

export function isColorWhite(s: string): boolean {
  return contrastRatio(fromHex(s).rgba, white) > 2;
}
