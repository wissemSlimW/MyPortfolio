import { createUseStyles } from "react-jss";

export const useSliderCarouselStyles = createUseStyles((theme: AppTheme) => ({
  carouselContainer: {
    paddingBlock: 40,
  },
  "@media only screen and (min-width: 900px) ": {
    box: {
      width: 500,
    },
  },
  loadingImgAnimation: {
    "&:before": {
      content: '""',
      position: "absolute",
      inset: 0,
      animation: "$pulsing 2s infinite linear",
      backgroundColor: "#00000000",
    },
  },
  "@keyframes pulsing": {
    "50%": {
      backgroundColor: "#00000005",
    },
  },

  imgContainer: { padding: 10 },
  imgSkeleton: {
    padding: 20,
    marginInline: 20,
    borderRadius: 25,
    backgroundColor: theme.colorWhite,
    boxShadow: `2px 2px 7px ${theme.colorDark}`,
  },
  img: { width: "100%", borderRadius: 15 },
  imgBlock: { display: "flex", overflow: "hidden", position: "relative" },
  next: {
    width: 44,
    height: 44,
    position: "absolute",
    zIndex: 2,
    insetInlineEnd: 20,
    insetBlockStart: "50%",
    color: "white",
    background: "#33333340",
    padding: 10,
    borderRadius: "50%",
    cursor: "pointer",
  },
  prev: {
    width: 44,
    height: 44,
    position: "absolute",
    zIndex: 2,
    insetInlineStart: 20,
    insetBlockStart: "50%",
    color: "white",
    background: "#33333340",
    padding: 10,
    borderRadius: "50%",
    cursor: "pointer",
  },
}));
