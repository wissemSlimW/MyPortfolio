import { createUseStyles } from "react-jss";

export const useTextInputStyles = createUseStyles({
  TextInputContainer: {
    "&&&>div>div>input": {
      color: ({ theme }: { theme: AppTheme }) => theme.colorBlack,
    },
    "&&&>div>div>textarea": {
      color: ({ theme }: { theme: AppTheme }) => theme.colorBlack,
    },
    "&&&>div>div>fieldset": {
      borderRadius: 15,
    },
  },
  TextInputContainerDark: {
    "&&&>div>div>fieldset": {
      border: ({ theme }: { theme: AppTheme }) =>
        `1px solid ${theme.colorPrimary}`,
      boxShadow: ({ theme }: { theme: AppTheme }) =>
        `0px 0px 10px  ${theme.colorPrimary}`,
    },
  },
  TextInputContainerLight: {
    "&&&>div>div": {
      backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorLight,
      borderRadius: 15,
    },
    "&&&>div>div>fieldset": {
      borderColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
      boxShadow: `1px 1px 4px 1px #00000040`,
    },
  },
  labelStyleDark: {
    '&&&': {
      color: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
      fontWeight: 700,
    }
  },
  labelStyleLight: {
    "&&&": {
      backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorLight,
      paddingInline: 5,
      borderRadius: 15,
      fontWeight: 500,
    }
  },
});
