import { createUseStyles } from "react-jss";

export const useMainStyle = createUseStyles((theme: AppTheme) => ({
  imgContainer: {
    display: "flex",
    transform: "translateY(50px)",
    filter: "blur(20px)",
    opacity: 0,
    animation: "$showContent .5s  linear 1 forwards",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    width: "min(80%,550px)",
    aspectRatio: 1,
    position: "relative",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    position: "absolute",
    inset: 0,
    zIndex: 2,
    objectFit: "contain",
    borderRadius: "50%",
  },
  bgImg: {
    width: "30%",
    height: "30%",
    transform: "translateY(5%)",
    aspectRatio: 1,
    opacity: 0,
    filter: "blur(20px)",
    borderRadius: "50%",
    animation: "$enlarge .5s .2s linear 1 forwards",
    backgroundColor: theme.colorPrimary,
    boxShadow: ({ theme }: { theme: AppTheme }) =>
      `0px 0px 5px ${theme.colorPrimary}`,
  },
  text: { fontSize: 28, fontWeight: 700 },
  animatedText: { fontSize: 28, fontWeight: 700, height: 66, lineHeight: 1.1 },
  animatedTextTyped: {
    color: theme.colorPrimary,
    fontSize: 30,
    fontWeight: 700,
  },
  profileName: {
    color: theme.colorPrimary,
    fontSize: 48,
    lineHeight: 1.4,
    fontWeight: 700,
  },
  contentContainer: {
    alignItems: "center",
    borderRadius: 20,
    paddingBlock: 20,
    paddingInlineStart: 20,
    transform: "translateX(100px)",
    filter: "blur(20px)",
    opacity: 0,
    animation: "$slideContent .5s .2s linear 1 forwards",
  },
  contentCardBg: {
    backgroundColor: theme.colorWhite,
  },
  animateBackgroundContainer: {
    position: "relative",
    // backgroundColor: theme.colorLight,
  },
  foregroundContainer: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    zIndex: 10,
    position: "relative",
    inset: 0,
  },
  "@keyframes move": {
    "0% 100%": {
      top: 0,
    },
    "50%": {
      top: 10,
    },
  },
  description: {
    paddingBlockEnd: 30,
    fontSize: 14,
    fontWeight: 600,
    textAlign: "start",
  },
  profileDescription: {
    lineHeight: 1.75,
    color: theme.colorDark,
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
    // gap: 10,
    height: 54,
  },
  link: {
    height: 54,
    aspectRatio: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkIcon: {
    height: 44,
    width: 44,
    borderRadius: "50%",
    fill: theme.colorWhite,
    color: theme.colorPrimary,
    "&:hover": { height: 54, width: 54 },
  },

  "@keyframes showContent": {
    to: {
      transform: "translateY(0px)",
      filter: "blur(0px)",
      opacity: 1,
    },
  },
  "@keyframes slideContent": {
    to: {
      transform: "translateX(0px)",
      filter: "blur(0px)",
      opacity: 1,
    },
  },
  "@keyframes enlarge": {
    to: {
      transform: "translate(0%)",
      width: "100%",
      height: "100%",
      filter: "blur(0px)",
      opacity: 1,
    },
  },
}));
