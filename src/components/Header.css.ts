import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "52px",

  borderBottom: "2px solid rgba(241, 241, 241, 1)",

  fontSize: "14px",
  fontWeight: "400",

  color: "rgba(9, 4, 12, 1)",
});

export const topContainer = style({
  display: "flex",
  alignItems: "center",

  padding: "5px 10px",
});

export const topLeft = style({
  display: "flex",
  alignItems: "flex-end",

  flex: "1",

  // truncated
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const topRight = style({
  display: "flex",
  alignItems: "center",

  gap: "30px",
});

export const bottomContainer = style({
  display: "flex",
  justifyContent: "space-between",

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const bottomLeftContainer = style({
  display: "flex",

  // truncated
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const logo = style({
  width: "16px",
  height: "16px",

  flexShrink: 0,

  marginRight: "6px",
});
