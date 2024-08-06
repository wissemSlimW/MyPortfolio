import { createUseStyles } from "react-jss";

export const useSliderStyles = createUseStyles((theme: AppTheme) => ({
  container: {
    height: "100dvh",
    width: "100vw",
    overflow: "hidden",
    position: "relative",
  },
  // main background
  list: {
    "&>:first-child": {
      zIndex: 2,
    },
  },
  itemAnimation: {
    zIndex: 1,
    "& >$content> $title, $description, $btns": {
      transform: "translateY(50px)",
      filter: "blur(20px)",
      opacity: 0,
      animation: "$showContent .5s 1s linear 1 forwards",
    },
  },
  item: {
    width: "100%",
    height: "100%",
    position: "absolute",
    inset: 0,
  },
  itemImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    position: "absolute",
    top: "20%",
    width: 1140,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    maxWidth: "80%",
    insetInlineStart: "50%",
    transform: "translateX(-50%)",
    color: "#fff", //TODO
    textShadow: "0 5px 10px #0004",
  },
  title: {
    color: theme.colorPrimary,
    fontFamily: "Poppins",
    fontSize: "7dvh",
    fontWeight: "bold",
    maxWidth: 350,
    lineHeight: "1em",
    "&&&": { animationDelay: "1.2s" },
  },
  description: {
    padding: 20,
    width: "min(400px, 100%)",
    height: 200,
    overflow: "hidden",
    backgroundColor: "#00000040",
    borderRadius: 20,
    textOverflow: "ellipsis",
    lineHeight: "1.75",
    "&&&": { animationDelay: "1.6s" },
  },
  btns: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 130px)",
    gridTemplateRows: 40,
    gap: 5,
    marginBlockStart: 20,
    "&&&": { animationDelay: "1.8s" },
  },
  btn: {
    border: "none",
    borderRadius: 10,
    color: theme.colorWhite,
    backgroundColor: theme.colorPrimary,
    letterSpacing: 3,
    fontFamily: "Poppins",
    fontWeight: 500,
    cursor: "pointer",
  },
  // thumbnail
  thumbnails: {
    position: "absolute",
    bottom: 130,
    insetInlineStart: "60%",
    width: "max-content",
    zIndex: 10,
    display: "flex",
    gap: 20,
  },
  thumbnail: {
    boxShadow: `2px 2px 7px #24282569`,
    width: 150,
    height: 220,
    flexShrink: 0,
    position: "relative",
    borderRadius: 20,
  },
  thumbImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 20,
  },
  thumbContent: {
    display: "flex",
    flexDirection: "column",
    color: "#fff", //TODO
    position: "absolute",
    insetBlockEnd: 10,
    insetInline: 10,
  },
  thumbTitle: {
    fontWeight: 500,
  },
  thumbDescription: {
    fontWeight: 300,
  },

  //arrows
  arrows: {
    position: "absolute",
    insetBlockEnd: "max(20%,150px)",
    insetInlineEnd: "52%",
    zIndex: 100,
    width: 300,
    maxWidth: "30%",
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  arrowBtn: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: theme.colorPrimaryLight,
    border: "none",
    color: theme.colorWhite,
    fontFamily: "monospace", // TODO
    fontWeight: "bold",
    transition: ".5s",
    "&:hover": {
      backgroundColor: "#fff", // TODO
      color: "#000",
    },
  },

  //timing
  time: {
    position: "absolute",
    zIndex: 10,
    width: "0%",
    height: 3,
    backgroundColor: theme.colorPrimary, // TODO
    insetBlockStart: 0,
    insetInlineStart: 0,
  },
  next: {
    "& $time ": {
      animation: "$runningTime 3s linear 1 forwards",
    },
    "& $arrows> $arrowBtn": { pointerEvents: "none" },
    "& $list": {
      "&>:first-child": {
        "&> $itemImg": {
          width: 150,
          height: 220,
          position: "absolute",
          bottom: 50,
          insetInlineStart: "60%",
          borderRadius: 30,
          animation: "$showImage .5s linear 1 forwards",
        },
      },
    },
    "&> $thumbnails": {
      animation: "$effectNext .5s linear 1 forwards",
      "&>:last-child": {
        overflow: "hidden",
        animation: "$showThumbnail .5s linear 1 forwards",
      },
    },
  },

  prev: {
    "& $time ": {
      animation: "$runningTime 3s linear 1 forwards",
    },
    "& $arrows> $arrowBtn": { pointerEvents: "none" },
    "& $list ": {
      "&>$itemImg": { zIndex: 100 },
      "&>:nth-child(2)": {
        zIndex: 2,
        "&> $itemImg": {
          animation: "$outFrame 0.5s linear 1 forwards",
          position: "absolute",
          bottom: 0,
          insetInlineStart: 0,
        },
        "& $title, $description, $btns": {
          animation: "$contentOut 1.5s linear 1 forwards !important",
        },
      },

      "&>:last-child": {
        "&> $itemImg": {
          zIndex: 100,
        },
      },
    },
    "&> $thumbnails ": {
      "&>:first-child": {
        display: "hidden",
        opacity: 0,
        animation: "$showThumbnail .5s linear 1 forwards",
      },
    },
  },
  // animations

  "@keyframes showContent": {
    to: {
      transform: "translateY(0px)",
      filter: "blur(0px)",
      opacity: 1,
    },
  },
  "@keyframes showImage": {
    "20%": {
      transform: "translateY(-100px) ",
    },
    "100%": {
      transform: "translateY(0px) ",
      bottom: 0,
      insetInlineStart: 0,
      width: "100%",
      height: "100%",
      borderRadius: 0,
    },
  },
  "@keyframes showThumbnail": {
    from: {
      width: 0,
      opacity: 0,
    },
  },
  "@keyframes effectNext": {
    from: {
      transform: " translateX(150px)",
    },
  },
  "@keyframes outFrame:": {
    "20%": { transform: "translateY(-100px) " },
    "100%": {
      transform: "translateY(0px) ",
      width: 150,
      height: 220,
      bottom: 130,
      insetInlineStart: "60%",
      borderRadius: 20,
    },
  },
  "@keyframes contentOut": {
    to: {
      transform: "translateY(-150px)",
      filter: "blur(20px)",
      opacity: 0,
    },
  },
  "@keyframes runningTime": {
    from: { width: "100%" },
    to: { width: 0 },
  },
}));
