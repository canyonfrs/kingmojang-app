import { style } from "@vanilla-extract/css";

export const content = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  display: "flex",
  flexDirection: "column",

  width: "100%",
  maxWidth: "360px",

  padding: "10px",

  gap: "10px",

  backgroundColor: "#FFFFFF",
  boxShadow: "4px 4px 3px rgba(142, 142, 142, 1)",
  border: "1px solid rgba(204, 204, 204, 1)",
});

export const closeIcon = style({
  cursor: "pointer",
});

export const contentHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "right",

  marginBottom: "10px",
});

export const titleContainer = style({
  display: "flex",
  alignItems: "center",

  flex: "1",
});

export const title = style({
  fontSize: "14px",
  letterSpacing: "-0.4px",

  marginLeft: "4px",
});

export const description = style({
  fontSize: "14px",
  fontWeight: "400",
});

export const overlay = style({
  position: "fixed",
  top: "0",
  left: "0",

  width: "100vw",
  height: "100vh",

  backgroundColor: "rgba(0, 0, 0, 0.4)",
});

export const buttonContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",

  marginTop: "10px",

  gap: "10px",
});

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100px",
  height: "30px",

  borderRadius: "5px",

  fontSize: "14px",
  fontWeight: "400",

  color: "rgba(9, 4, 12, 1)",
  backgroundColor: "rgba(241, 241, 241, 1)",
});
