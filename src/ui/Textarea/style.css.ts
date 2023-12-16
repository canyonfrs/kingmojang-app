import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",

  width: "100vw",
  // NOTE: 100vh - header size (52px) - footer size (22px)
  height: "calc(100vh - 52px - 22px)",
});

export const field = style({
  width: "100%",
  height: "100%",
});

export const textarea = style({
  width: "100%",
  height: "100%",

  fontSize: "20px",

  padding: "10px",

  border: "none",
  outline: "none",
  resize: "none",

  overflow: "scroll",

  "::-webkit-scrollbar-track": {
    backgroundColor: "rgba(241, 241, 241, 1)",
  },

  "::-webkit-scrollbar": {
    WebkitAppearance: "none",
    width: "14px",
  },

  "::-webkit-scrollbar-thumb": {
    background: "rgba(205, 205, 205, 1)",
  },
});
