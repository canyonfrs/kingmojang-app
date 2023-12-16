import { style } from "@vanilla-extract/css";

export const formContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  gap: "6px",

  width: "100%",
  height: "100%",
});

export const formError = style({
  fontSize: "12px",
  color: "red",
});
