import { BoatTypes } from "@/types";
// svgs
import svgs from "@/vesselSvg";

/** 创建船舶 svg 实例 */
export const createBoatSVG = (type: BoatTypes) => {
  console.log(svgs, "svgs");

  const res = svgs[type];
  return res;
};
