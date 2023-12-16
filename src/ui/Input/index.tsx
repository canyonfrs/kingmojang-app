import clsx from "clsx";
import * as React from "react";

import * as Styled from "./style.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return <input className={clsx(Styled.input, props.className)} {...props} />;
};
