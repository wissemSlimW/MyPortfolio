import { createUseStyles } from "react-jss";

export const useHomeStyle = createUseStyles((theme: AppTheme) => ({
  homeStyle: {
    scrollBehavior: "smooth",
    display: "flex",
    flexDirection: "column",
  },
  section: {
    paddingBlockStart: 70,
    paddingBlockEnd: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100dvh",
    color: theme?.colorBlack,
  },
  sectionTitle: {
    fontSize: 44,
    color: theme.colorPrimary,
  },
  sectionBg: {
    backgroundColor: theme?.colorLight,
  },
}));
