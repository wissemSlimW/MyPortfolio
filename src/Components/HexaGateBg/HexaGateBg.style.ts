import { createUseStyles } from "react-jss";

export const useHexaGateBgStyles = createUseStyles({
  HexaGateBgStyle: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    backgroundColor: ({ theme }: { theme: AppTheme; y?: number; x?: number }) =>
      theme.colorWhite,
    "&>div": {
      "&:before": {
        content: '""',
        filter: "blur(70px)",
        animation: "$spread 4s linear infinite",
        insetInline: "50%",
        insetBlock: "0%",
        position: "absolute",
        // borderRadius:'50%',
        border: ({ theme }: { theme: AppTheme }) =>
          `40px solid ${theme.colorPrimary}`,
        boxShadow: ({ theme }: { theme: AppTheme }) =>
          `inset 0px 20px 20px 20px ${theme.colorPrimary}`,
      },
      position: "relative",
      insetInlineStart: "calc(-2.88vh - 4px)",
      width: "120vw",
      height: "120vh",
      display: "flex",
      flexDirection: "column",
      columnGap: 4,
      rowGap: "4.2vh",
      flexWrap: "wrap",
      "&>span": {
        width: "10vh",
        height: "5.76vh",
        position: "relative",
        backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorLight,
        "&::before": {
          content: '""',
          position: "absolute",
          width: 0,
          height: 0,
          insetInlineStart: "0vh",
          insetBlockEnd: "5.76vh",
          borderBlockEnd: ({ theme }: { theme: AppTheme }) =>
            `2.88vh solid ${theme.colorLight}`,
          borderInline: `5vh solid transparent`,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: 0,
          height: 0,
          insetInlineStart: "0vh",
          insetBlockStart: "5.76vh",
          borderBlockStart: ({ theme }: { theme: AppTheme }) =>
            `2.88vh solid ${theme.colorLight}`,
          borderInline: `5vh solid transparent`,
        },
      },
      "&>:nth-child(even)": {
        transform: "translateX(5vh)",
      },
    },
  },
  "@keyframes spread": {
    "0%": {
      insetInline: "50%",
      opacity: 0.8
    },
    "100%": {
      insetInline: "-20%",
      opacity: 1
    },
  },
});
