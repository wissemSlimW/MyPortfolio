import { createUseStyles } from "react-jss";

export const useAboutStyle = createUseStyles(
  (props: { theme: AppTheme; size: number | undefined }) => ({
    block: {
      alignItems: "center",
      aspectRatio: 2,
    },
    imgContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      height: props.size,
    },
    imgBgStart: {
      backgroundColor: props.theme.colorPrimary,
      position: "absolute",
      width: "0%",
      insetBlock: 0,
      insetInlineEnd: "50%",
      animation: "$slideBg.5s .2s linear 1 forwards",
    },
    imgBgEnd: {
      backgroundColor: props.theme.colorPrimary,
      position: "absolute",
      width: "0%",
      insetBlock: 0,
      insetInlineStart: "50%",
      animation: "$slideBg .5s .2s linear 1 forwards",
    },
    imgStyle: {
      overflow: "hidden",
      position: "absolute",
      width: "100%",
      aspectRatio: "1",
      insetInlineStart: 0,
      insetBlockStart: 0,
      "&>img": {
        zIndex: 2,
        objectFit: "contain",
        position: "absolute",
        height: "100%",
        aspectRatio: 1,
        inset: 0,
      },
      "&:before": {
        content: "''",
        position: "absolute",
        insetBlockEnd: "55%",
        insetInline: 0,
        zIndex: 1,
        backgroundColor: "transparent",
        borderBlockStart: `${(props.size || 0) / 4}px solid ${
          props.theme.colorWhite
        }`,
        borderBlockEnd: `${(props.size || 0) / 4}px solid transparent`,
        borderInline: `${(props.size || 0) / 2}px solid ${
          props.theme.colorWhite
        }`,
      },
      "&:after": {
        insetBlockStart: "70%",
        insetInline: 0,
        content: "''",
        position: "absolute",
        zIndex: 3,
        backgroundColor: "transparent",
        borderBlockEnd: `${(props.size || 0) / 4}px solid ${
          props.theme.colorWhite
        }`,
        borderBlockStart: `${(props.size || 0) / 4}px solid transparent`,
        borderInline: `${(props.size || 0) / 2}px solid ${
          props.theme.colorWhite
        }`,
      },
    },
    aboutColor: {
      color: props.theme.colorDark,
    },
    content: {
      display: "flex",
      flexDirection: "column",
    },
    infoblock: {
      borderRadius: 20,
      paddingBlockEnd: 50,
      padding: 20,
      backgroundColor: props.theme.colorWhite,
    },
    infoCard: {
      animation: "$unblur .5s linear 1 forwards",
      filter: "blur(20px)",
      fontWeight: 600,
      paddingBlock: 15,
      paddingInline: 10,
      maxWidth: 250,
      borderRadius: 25,
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      gap: 5,
      width: "100%",
      backgroundColor: props.theme.colorLight,
      color: props.theme.colorWhite,
    },
    cardsContainer: {
      gap: 20,
      display: "flex",
      justifyContent: "center",
    },
    cardHeader: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    cardIcon: {
      width: 24,
      height: 24,
      color: props.theme.colorBlack,
    },
    cardLabel: { fontSize: 14, fontWeight: 400, color: props.theme.colorBlack },
    cardDescription: {
      fontSize: 22,
      fontWeight: 600,
      color: props.theme.colorPrimary,
    },
    description: {
      transform: "translateY(50px)",
      filter: "blur(20px)",
      opacity: 0,
      width: "80%",
      marginInline: "auto",
      paddingBlockStart: 20,
      paddingBlockEnd: 50,
      paddingInline: 50,
      textAlign: "center",
      fontSize: 14,
      letterSpacing: 1,
      fontWeight: 500,
      animation: "$showContent .5s .2s linear 1 forwards",
    },
    resumeBtn: {
      cursor: "pointer",
      backgroundColor: props.theme.colorPrimary,
      borderRadius: 10,
      padding: 10,
      height: 44,
      fontSize: 16,
      fontWeight: 500,
      color: props.theme.colorWhite,
      boxShadow: `0px 2px 10px 2px ${props.theme.colorPrimary}`,
    },
    "@keyframes slideBg": {
      to: {
        width: "40%",
      },
    },
    "@keyframes unblur": {
      to: {
        filter: "blur(0px)",
      },
    },
    "@keyframes showContent": {
      to: {
        transform: "translateY(0px)",
        filter: "blur(0px)",
        opacity: 1,
      },
    },
  })
);
