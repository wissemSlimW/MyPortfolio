import { createUseStyles } from "react-jss";

export const useProjectCardStyles = createUseStyles({
  cardContainer: {
    width: 320,
    height: 425,
    padding: 5,
    position: "relative",
    "&:hover $cardBlockContent": {
      transform: "rotateY(180deg)",
    },
    "&:hover $cardThumbnailBack": {
      display: "flex",
    },
    "&:hover $cardThumbnail": {
      display: "none",
    },
  },
  cardBlockContent: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-30",
    boxShadow: "8 4px 8px 0 rgba(B, 8, 8, 8.7)",
  },
  cardThumbnailBack: {
    transform: "scaleX(-1)",
    position: "absolute",
    inset: 0,
    display: "none",
    width: "100%",
    height: "100%",
    borderRadius: 25,
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
  cardThumbnail: {
    padding: 4,
    position: "absolute",
    inset: 0,
    display: "flex",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 25,
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
  thumbnailImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 25,
  },
  cardBlock: {
    padding: 4,
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    borderRadius: 25,
  },
  hoverAnimationDark: {
    "&:hover $animationContainer":  { display: "flex" },
  },
  hoverAnimationLight: {
    "&:hover": {
      "&>div>:last-child": {
        backgroundColor: ({ theme }: { theme: AppTheme }) =>
          theme.colorPrimaryLight,
      },
    },
  },
  card: {
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorWhite,
    width: "100%",
    height: "100%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: 15,
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
    paddingBlock: 10,
    paddingInline: 20,
    "&&&": {
      textTransform: "none",
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
    display: "none",
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
      fontSize: 14,
      fontWeight: 400,
      maxHeight: 106,
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 4,
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
  },
  FlipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-30",
    boxShadow: "8 4px 8px 0 rgba(B, 8, 8, 8.7)",
  },
  flipCard: {
    "&:hover $FlipCardInner": {
      transform: "rotateY(180deg)",
    },
  },
  flipCardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
  },
});
