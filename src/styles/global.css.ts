import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  fontFamily: "Malgun Gothic, 굴림, Gulim, Arial",
});

globalStyle("*, *:before, *:after", {
  boxSizing: "border-box",
});
