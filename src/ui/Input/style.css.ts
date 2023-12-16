import { style } from "@vanilla-extract/css";

export const input = style({
  width: "100%",
  height: "100%",

  fontSize: "14px",

  padding: "6px",

  backgroundColor: "#FFFFFF",

  border: "1px solid #7A7A7A",
  outline: "none",

  ":focus": {
    border: "1px solid #0078D7",
  },
});
