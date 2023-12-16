import { style } from "@vanilla-extract/css";

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100px",
  height: "30px",

  backgroundColor: "#E1E1E1",
  border: "2px solid #BCBCBC",

  cursor: "pointer",

  ":hover": {
    backgroundColor: "#CCCCCC",
  },

  ":focus": {
    outline: "none",
    border: "2px solid #0078D7",
  },

  ":disabled": {
    color: "#A0A0A0",
    backgroundColor: "#CCCCCC",
    cursor: "not-allowed",
  },
});
