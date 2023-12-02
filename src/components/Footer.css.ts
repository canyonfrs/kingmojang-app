import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",

  width: "100vw",
  height: "22px",
  backgroundColor: "rgba(240, 240, 240, 1)",
  borderTop: "1px solid #E6E6E6",

  whiteSpace: "nowrap",

  padding: "0 12px",
});

export const item = style({
  display: "flex",
  alignItems: "center",

  fontSize: "12px",

  color: "rgba(9, 4, 12, 1)",
});

export const lnCol = style([
  item,
  {
    width: "50%",
  },
]);

export const withDivider = style({
  ":before": {
    content: "'|'",
    margin: "0 12px",
    color: "#D3D3D3",
  },
});

export const restItem = style([
  item,
  withDivider,
  {
    width: "auto",
  },
]);
