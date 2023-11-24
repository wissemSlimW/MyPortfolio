import { createUseStyles } from "react-jss";

export const useProjectCardStyles = createUseStyles({
  cardContainer: {
    aspectRatio: 0.8,
    minHeight: 400,
    padding: 10,
    "&&>div": {
      padding: 5,
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      borderRadius: 25,
    },
  },
  hoverAnimationDark: {
    '&:hover': { "&>div>:first-child": { display: 'flex' } },
  },
  hoverAnimationLight: {
    '&:hover': {
      "&>div>:last-child": {
        backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimaryLight
      }
    },
  },
  card: {
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorWhite,
    width: "100%",
    height: "100%",
    borderRadius: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: 20,
    gap: 10,
  },
  imageStyle: {
    width: "100%",
    aspectRatio: 1.5,
    borderRadius: 15,
    overflow: "hidden",
    objectPosition: "center",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
  },
  buttonStyle: {
    marginBlockStart: "auto ",
    "&&&": {
      textTransform: 'none',
      borderRadius: 25,
      fontWeight: 600,
      backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
    },
  },
  animationContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    display: 'none',
  },
  cardAnimation: {
    aspectRatio: 1,
    height: "150%",
    animation: " $rotate  8s infinite linear",
    borderRadius: 15,
    background: ({ theme }: { theme: AppTheme }) =>
      `conic-gradient( ${theme.colorPrimary} 0deg ,
        transparent 80deg , transparent 180deg ,
        ${theme.colorPrimary} 180deg ,
        transparent 260deg , transparent 360deg )`,
  },
  "@keyframes rotate": {
    "100%": {
      transform: "rotate(-360deg)",
    },
  },
  descriptionContainer: {
    flex: 1,
    overflow: "hidden",
    display: "flex",

    "&>div": {
      fontSize: 16,
      maxHeight: 76,
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      "-webkit-line-clamp": 3,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
  },
});
