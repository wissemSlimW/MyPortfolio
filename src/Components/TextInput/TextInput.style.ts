import { createUseStyles } from "react-jss";

export const useTextInputStyles = createUseStyles((theme: AppTheme) => ({
  TextInputContainer: {
    "&&&>div>div>input": {
      color: theme.colorBlack,
    },
    "&&&>div>div>textarea": {
      color: theme.colorBlack,
    },
    "&&&>div>div>fieldset": {
      borderRadius: 15,
    },
    "&&& label": { color: theme.colorPrimary },
  },
  TextInputContainerDark: {
    "&&&>div>div>fieldset": {
      border: `1px solid ${theme.colorPrimary}`,
      boxShadow: `0px 0px 7px  ${theme.colorPrimary}`,
    },
  },
  TextInputContainerLight: {
    "&&&>div>div": {
      backgroundColor: theme.colorWhite,
      borderRadius: 10,
    },
    "&&&>div>div>fieldset": {
      borderColor: theme.colorPrimaryLight,
      boxShadow: `1px 1px 0px 2px ${theme.colorPrimaryLight}`,
    },
  },
  labelStyleDark: {
    "&&&": {
      color: theme.colorPrimary,
      fontWeight: 700,
    },
  },
  labelStyleLight: {
    "&&&": {
      backgroundColor: theme.colorWhite,
      paddingInline: 15,
      borderRadius: 10,
      fontWeight: 500,
    },
  },
}));
