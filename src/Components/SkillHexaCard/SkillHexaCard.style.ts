import { createUseStyles } from "react-jss";

export const useSkillHexaCardStyles = createUseStyles({
  container: {
    marginBlock: 55,
    marginInline: 1,
    position: "relative",
    "&:hover": {
      "&>span": {
        "&:before": {
          borderBlockEnd: ({ theme }: { theme: AppTheme }) =>
            `57.6px solid ${theme.colorPrimary}`,
        },
        " &:after": {
          borderBlockStart: ({ theme }: { theme: AppTheme }) =>
            `57.6px solid ${theme.colorPrimary}`,
        },
        backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
      },
    },
  },
  card: {
    width: 200,
    height: 115.2,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "blur(5px)",
    "&::before": {
      content: '""',
      position: "absolute",
      width: 0,
      height: 0,
      insetInlineStart: 0,
      insetBlockEnd: 115.2,
      borderBlockEnd: `57.6px solid transparent`,
      borderInline: `100px solid transparent`,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: 0,
      height: 0,
      insetInlineStart: 0,
      insetBlockStart: 115.2,
      borderBlockStart: `57.6px solid transparent`,
      borderInline: `100px solid transparent`,
    },
  },
  subCard: {
    insetInline: 5,
    insetBlock: 4,
    width: 190,
    height: 109.44,
    position: "absolute",
    zIndex: 10,
    display: "flex",
    alignItems: "start",
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorWhite,
    "&::before": {
      content: '""',
      position: "absolute",
      width: 0,
      height: 0,
      insetInlineStart: 0,
      insetBlockEnd: 109.44,
      borderBlockEnd: ({ theme }: { theme: AppTheme }) =>
        `54.72px solid ${theme.colorWhite}`,
      borderInline: `95px solid transparent`,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: 0,
      height: 0,
      insetInlineStart: 0,
      insetBlockStart: 109.44,
      borderBlockStart: ({ theme }: { theme: AppTheme }) =>
        `54.72px solid ${theme.colorWhite}`,
      borderInline: `95px solid transparent`,
    },
  },
  skillCarImage: {
    insetBlockStart: "-25%",
    insetInline: "15%",
    zIndex: 10,
    width: "70%",
    aspectRatio: 1,
    objectFit: "cover",
    objectPosition: "center",
    position: "absolute",
  },
  skillCarTitle: {
    position: "absolute",
    zIndex: 10,
    insetBlockStart: "100%",
    fontSize: 16,
    width: "100%",
    justifyContent: "center",
    display: "flex",
    color: ({ theme }: { theme: AppTheme }) => theme.colorDark,
  },
  cardAnimation: {
    transform: "translateX(100px)",
    filter: "blur(15px)",
    animation: "$vibrate 0.5s linear  forwards",
  },
  "@keyframes vibrate": {
    "100%": { transform: "translateX(0px)", filter: "blur(0px)" },
  },
});
