import { createUseStyles } from "react-jss";

export const useDesktopHeaderStyles = createUseStyles((theme: AppTheme) => ({
  header: {
    position: "absolute",
    zIndex: 10,
    insetBlockStart: 0,
    insetInlineStart: 0,
    alignItems: "center",
    display: "flex",
    height:"100dvh"
  },
  navBar: {
    borderStartEndRadius: 45,
    borderEndEndRadius: 45,
    marginBlock: "auto",
    gap: 10,
    width: 80,
    maxWidth: 80,
    paddingInlineStart: 10,
    paddingBlock: 20,
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
  },
  navLink: {
    position: "relative",
    color: theme.colorLight,
    display: "flex",
    gap: 10,
    transition: "0.5s",
    "&:hover> $navLinkLabelContainer": {
      width: "unset",
    },
  },
  navLinkIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: "50%",
    backgroundColor: theme.colorPrimary,
    height: 58,
    width: 58,
    color: theme.colorWhite,
    boxShadow: `1px 1px 7px ${theme.colorPrimary}`,
  },
  navLinkLabelContainer: {
    width: 0,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navLinkLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colorWhite,
    backgroundColor: theme.colorPrimary,
    padding: 10,
    borderRadius: 20,
  },
  modeSwitcherButton: {
    paddingBlock: 13,
    paddingInline: 13,
  },
}));
