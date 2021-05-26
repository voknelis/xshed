// @ts-ignore
import { fromHex } from "vuetify/es5/components/VColorPicker/util";
// @ts-ignore
import { contrastRatio } from "vuetify/es5/util/colorUtils";

const white = fromHex("#FFFFFF").rgba;

export function isColorWhite(s: string): boolean {
  return contrastRatio(fromHex(s).rgba, white) > 2;
}
