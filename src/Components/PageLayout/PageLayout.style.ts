import { createUseStyles } from "react-jss";

export const usePageLayoutStyles = createUseStyles({
  bgContainer: { position: "relative", width: "100vw", height: "100dvh" },
  contentContainer: { position: "absolute", inset: 0, zIndex: 1 },
  mainContainer: {
    width: "100vw",
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Poppins",
    backgroundSize: "cover",
    position: "relative",
    "&>:first-child": {
      position: "relative",
      insetInline: 0,
      insetBlockStart: 0,
      width: 0,
      zIndex: 20,
    },
  },
  childrenContainer: {
    scrollBehavior: "smooth",
    flex: 1,
    maxHeight: "calc(100dvh)",
    overflow: "auto",
    "&::-webkit-scrollbar": { display: "none" },
  },
});
