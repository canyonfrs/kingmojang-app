import clsx from "clsx";

import type { IconProps } from "./types";

export const SquareIcon = (props: IconProps) => {
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
      <path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Z"></path>
    </svg>
  );
};
