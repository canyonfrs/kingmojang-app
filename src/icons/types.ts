import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * @default 16
   */
  size?: number | string;
}
