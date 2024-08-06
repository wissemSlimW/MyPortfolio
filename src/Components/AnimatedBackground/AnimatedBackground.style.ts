import { createUseStyles } from "react-jss";

export const useAnimatedBackgroundStyles = createUseStyles({
  animatedBackground: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    "&>div": {
      position: "absolute",
      display: "block",
      listStyle: "none",
      width: 20,
      background: ({ theme }: { theme: AppTheme }) =>
        theme.colorPrimaryExtraLight,
      boxShadow: ({ theme }: { theme: AppTheme }) =>
        `inset 2px 2px 15px ${theme.colorPrimaryLight}`,
      border: ({ theme }: { theme: AppTheme }) =>
        `1px solid ${theme.colorPrimaryLight}`,
      animation: "$spin 6s linear infinite",
      bottom: -150,
      aspectRatio: 1,
      "&::before": {
        content: '""',
        position: "absolute",
        insetBlockStart: "20%",
        insetInlineStart: "20%",
        width: "20%",
        height: "20%",
        borderRadius: "50%",
        background: ({ theme }: { theme: AppTheme }) =>
          theme.colorPrimaryExtraLight,
        border: ({ theme }: { theme: AppTheme }) =>
          `1px solid ${theme.colorPrimaryExtraLight}`,
      },
    },
  },
  "@keyframes spin ": {
    "0%": {
      transform: "translateY(0), rotate(0deg)",
      opacity: 1,
      borderRadius: "0%",
    },
    "50%": {
      transform: "translateY(0), rotate(360deg)",
      opacity: 1,
      borderRadius: "50%",
    },
    "100%": {
      transform: "translateY(-120dvh) rotate(720deg)",
      opacity: 1,
      borderRadius: "50%",
    },
  },
});
