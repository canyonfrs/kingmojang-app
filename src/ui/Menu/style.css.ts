import { style } from "@vanilla-extract/css";

export const trigger = style({
  fontSize: "14px",
  fontWeight: "400",
  color: "rgba(9, 4, 12, 1)",

  padding: "4px 10px",
  border: "1px solid white",

  cursor: "pointer",

  ":hover": {
    backgroundColor: "#f1f1f1",
  },

  selectors: {
    '&[data-state="open"]': {
      background: "rgba(204, 232, 255, 1)",
      border: "1px solid #91C9F7",
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",

  backgroundColor: "rgba(242, 242, 242, 1)",

  width: "100%",
  height: "100%",

  gap: "2px",

  boxShadow: "4px 4px 3px rgba(142, 142, 142, 1)",
  border: "1px solid rgba(204, 204, 204, 1)",

  padding: "2px",
});

export const item = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  fontSize: "14px",

  paddingLeft: "25px",
  paddingRight: "10px",
  paddingTop: "4px",
  paddingBottom: "4px",

  minWidth: "240px",

  outline: "none",

  ":hover": {
    backgroundColor: "#91C9F7",
    cursor: "pointer",
  },
});

export const rightSlot = style({});

export const seperator = style({
  width: "100%",
  height: "1px",

  backgroundColor: "rgba(204, 204, 204, 1)",

  margin: "6px 0",
});
