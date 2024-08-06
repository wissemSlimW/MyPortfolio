import { createUseStyles } from "react-jss";

export const useColorsMenuStyles = createUseStyles({
  btnIcon: { fill: ({ theme }: { theme: AppTheme }) => theme.colorWhite },
  dialMenu: {
    position: "relative",
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btns: {
    position: "absolute",
    width: 20,
    height: 20,
    boxShadow: ({ theme }: { theme: AppTheme }) =>
      `0px 0px 4px 2px ${theme.colorPrimary}`,
    borderRadius: "50%",
    cursor: "pointer",
    transformOrigin: "0% 0%",
    transition: "transform 1s",
  },
  clicked: {
    height: 150,
    width: 150,
    transition: "all 1s",
    position: "absolute",
    transform: "translateY(35%) translateX(45%) rotateZ(10deg)",
    fill: ({ theme }: { theme: AppTheme }) => theme.colorLight,
    "& feFlood": {
      floodColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
    },
  },
  selected: {
    zIndex: 10,
    // boxShadow: ({ theme }: { theme: AppTheme }) => `0px 0px 4px 4px ${theme.colorBlack}`,
  },
});
