import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles({
  header: {
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
  },
  navBar: { display: "flex", justifyContent: "center", alignItems: 'center' },
  navLink: {
    paddingBlock: 10,
    paddingInline: 15,
    color: ({ theme }: { theme: AppTheme }) => theme.colorLight,
    fontSize: 16,
    fontWeight: "bold",
  },
  modeSwitcherButton: {
    paddingBlock: 13,
    paddingInline: 13,
  },

  // TO DO remove this class
  fixSelect: {
    "&>div": { paddingBlock: 10 },
  },
});
