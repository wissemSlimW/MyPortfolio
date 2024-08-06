import { createUseStyles } from "react-jss";

export const useContactStyle = createUseStyles((theme: AppTheme) => ({
  contactCard: {
    padding: 20,
    borderRadius: 35,
    backgroundColor: theme.colorPrimary,
    overflow: "hidden",
  },
  contentBlock: { background: theme.colorPrimary },
  detailsBlock: { paddingBlock: 30 },
  contactFieldCard: {
    borderRadius: 15,
    paddingBlock: 30,
    paddingInline: 20,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    boxShadow: ({ theme }: { theme: AppTheme }) =>
      `0px 0px 9px ${theme.colorPrimary}`,
  },
  contactFieldCardDark: {
    backgroundColor: theme.colorLight,
  },
  contactFieldCardLight: {
    backgroundColor: theme.colorWhite,
  },
  submitBtncontainer: {
    display: "flex",
    justifyContent: "end",
  },
  submitBtn: {
    "&&&": {
      cursor: "pointer",
      borderRadius: 20,
      paddingBlock: 10,
      paddingInline: 30,
      height: 44,
      fontSize: 16,
      fontWeight: 700,
      textTransform: "none",
    },
  },
  submitBtnDark: {
    "&&&": {
      backgroundColor: theme.colorPrimary,
      color: theme.colorWhite,
      boxShadow: ({ theme }: { theme: AppTheme }) =>
        `0px 2px 10px 2px ${theme.colorPrimary}`,
    },
  },
  submitBtnLight: {
    "&&&": {
      backgroundColor: theme.colorPrimary,
      color: theme.colorWhite,
      boxShadow: ({ theme }: { theme: AppTheme }) =>
        `0px 0px 8px 0px ${theme.colorPrimaryExtraLight}`,
    },
  },
  title: { color: theme.colorWhite, fontSize: 44 },
  contactColor: {
    color: theme.colorDark,
  },
  contactSubTitle: {
    color: theme.colorBlack,
    fontSize: 18,
    fontWeight: 700,
  },
  contactText: {
    paddingBlock: 10,
    paddingInlineEnd: 30,
    textAlign: "start",
    color: theme.colorWhite,
    fontSize: 14,
  },
  contactEmailContainer: {
    display: "flex",
    gap: 5,
    alignItems: "center",
    fontWeight:600,
    color:theme.colorBlack,
    paddingBlockStart: 20,
    paddingBlockEnd: 20,
  },
  sendIcon: {
    "&&& path": {
      fill: theme.colorBlack,
    },
  },
  linkIcon: {
    height: 44,
    width: 44,
    borderRadius: "50%",
    color: theme.colorWhite,
    "&:hover": { height: 54, width: 54 },
  },
  messageInput: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    "&>div": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      "&>div": {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        "&>div": {
          flex: 1,
          display: "flex",
          flexDirection: "column",
        },
      },
    },
  },
}));
