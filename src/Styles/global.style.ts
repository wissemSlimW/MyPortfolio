import { createUseStyles } from "react-jss";
import { WIDTHS } from "./sizes";

export const useGlobalStyles = createUseStyles({
  container: {
    width: WIDTHS.containers.lg,
    maxWidth: 1920,
    marginInline: "auto",
  },
  animationHidden: {
    // opacity: 0,
    // filter: "blur(5px)",
    // transform: "translateX(-100%)",
    // transition: "opacity 3s",
  },
  animationVisble: {
    // opacity: 1,
    // filter: "blur(0)",
    // transition: "opacity 3s",
    // transform: " translateX(0)",
  },
  cardMountAnimation: {
    animation: "$mount 1s ease-in-out",
  },
  cardSlideAnimation: {
    animation: "$slide 1s ease-in-out",
  },
  "@keyframes mount": {
    from: {
      opacity: 0.5,
      position: "relative",
      insetBlockStart: 50,
    },
    to: {
      opacity: 1,
      position: "relative",
      insetBlockStart: 0,
    },
  },
  "@keyframes slide": {
    from: {
      opacity: 0,
      position: "relative",
      filter: "blur(2px)",
      insetInlineEnd: "10%",
      transition: "all 1s",
    },
    to: {
      opacity: 1,
      filter: "blur(0)",
      position: "relative",
      insetInlineEnd: 0,
      transition: "all 1s",
    },
  },
});
