import clsx from "clsx";

import type { IconProps } from "./types";

export const MinusIcon = (props: IconProps) => {
  const { size = 16, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
      width={size}
      height={size}
      fill="#000000"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"></path>
    </svg>
  );
};
