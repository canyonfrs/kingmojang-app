import clsx from "clsx";
import * as React from "react";

import * as Styled from "./style.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = React.forwardRef((props: ButtonProps, forwardedRef: React.ForwardedRef<HTMLButtonElement>) => {
  return (
    <button {...props} ref={forwardedRef} className={clsx(Styled.button, props.className)}>
      {props.children}
    </button>
  );
});
