import { createUseStyles } from "react-jss";

export const useMobileHeaderStyles = createUseStyles({
  headerContainer: {
    boxShadow: ({ theme }: { theme: AppTheme }) =>
      `0px 0px 5px ${theme.colorPrimary}`,
    position: "absolute",
    insetBlockStart: "calc(100vh - 110px )",
    justifyContent: "center",
    insetInline: "calc(50vw - 175px )",
    borderRadius: 40,
  },
  navStyle: {
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorLight,
    width: 350,
    position: "relative",
    zIndex: 10,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    borderRadius: 40,
  },
  listStyle: {
    width: 300,
    display: "flex",
    position: "relative",
  },
  listItemStyle: {
    position: "relative",
    height: 60,
    width: 60,
    listStyle: "none",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
  },
  anchorStyle: {
    position: "relative",
    alignItems: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    fontWeight: 500,
  },
  iconStyle: {
    position: "relative",
    height: 30,
    width: 30,
    display: "block",
    lineHeight: "75px",
    fontSize: "1.5rem",
    textAlign: "center",
    transition: "0.5s",
    fill: ({ theme }: { theme: AppTheme }) => theme.colorBlack,
  },
  active: {
    "&>a>svg": {
      transform: "translateY(-30px)",
    },
    "&>a>span": {
      opacity: 1,
      transform: "translateY(10px)",
    },
  },
  textStyle: {
    position: "absolute",
    fontWeight: 500,
    letterSpacing: "0.05em",
    opacity: "0",
    transform: "translateY(20px)",
    color: ({ theme }: { theme: AppTheme }) => theme.colorBlack,
  },
  indicator: {
    boxShadow: ({ theme }: { theme: AppTheme }) =>
      `0px -1px ${theme.colorPrimary}`,
    position: "absolute",
    height: 60,
    width: 60,
    listStyle: "none",
    insetBlockStart: -30,
    transition: "0.5s",
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
    borderRadius: "50%",
    border: ({ theme }: { theme: AppTheme }) => `6px solid ${theme.colorLight}`,
  },
  subBlock: {
    height: 40,
    width: "75%",
    background: ({ theme }: { theme: AppTheme }) => theme.colorLight,
    boxShadow: ({ theme }: { theme: AppTheme }) => `0px 3px 5px ${theme.colorPrimary}`,
    position: 'absolute',
    insetBlock: '100%',
    borderEndEndRadius: 75,
    borderEndStartRadius: 75,
    paddingInline: 40,
    display: "flex",
    justifyContent: 'space-between'
  },
  modeSwitcherButton: {
    paddingBlock: 13,
    paddingInline: 13,
  },
  modeIcon: {
    "&&&>g> path": {
      fill: ({ theme }: { theme: AppTheme }) => theme.colorBlack
    }
  },
  colorsContainer: {
    display: "flex",
    gap: 7,
    alignItems: 'center'
  },
  dot: {
    width: 17,
    aspectRatio: 1,
    borderRadius: '50%',
    cursor: 'pointer'
  },
  selected: {
    border: ({ theme }: { theme: AppTheme }) => `2px solid ${theme.colorBlack}`
  }
});
