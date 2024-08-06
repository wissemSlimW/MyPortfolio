import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles((theme: AppTheme) => ({
  container: {
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: theme.colorPrimary,
  },
}));
