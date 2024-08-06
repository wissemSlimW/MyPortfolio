import { createUseStyles } from "react-jss";

export const useHexaGateBgStyles = createUseStyles({
  HexaGateBgStyle: {
    width: "100vw",
    height: "100dvh",
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
        borderInline: ({ theme }: { theme: AppTheme }) =>
          `1px solid ${theme.colorPrimary}`,
        boxShadow: ({ theme }: { theme: AppTheme }) =>
          `inset 0px 20px 20px 20px ${theme.colorPrimary}`,
      },
      position: "relative",
      insetInlineStart: "calc(-2.88dvh + 20px)",
      width: "120vw",
      height: "120dvh",
      display: "flex",
      flexDirection: "column",
      columnGap: "5.3dvh",
      backgroundColor: ({ theme }: { theme: AppTheme }) =>
        theme.colorPrimaryExtraLight,
      rowGap: "3.2dvh",
      flexWrap: "wrap",
      "&>span": {
        width: "10dvh",
        height: "5.76dvh",
        position: "relative",
        backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorLight,
        "&::before": {
          content: '""',
          position: "absolute",
          width: 0,
          height: 0,
          insetInlineStart: "0dvh",
          insetBlockEnd: "5.76dvh",
          borderBlockEnd: ({ theme }: { theme: AppTheme }) =>
            `2.88dvh solid ${theme.colorLight}`,
          borderInline: `5dvh solid transparent`,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: 0,
          height: 0,
          insetInlineStart: "0dvh",
          insetBlockStart: "5.76dvh",
          borderBlockStart: ({ theme }: { theme: AppTheme }) =>
            `2.88dvh solid ${theme.colorLight}`,
          borderInline: `5dvh solid transparent`,
        },
      },
      "&>:nth-child(even)": {
        transform: "translateX(5dvh)",
      },
    },
  },
  "@keyframes spread": {
    "0%": {
      insetInline: "50%",
      opacity: 0.8,
      borderWidth: 0,
    },
    "15%": { borderWidth: 40 },
    "100%": {
      insetInline: "-20%",
      opacity: 1,
    },
  },
});
