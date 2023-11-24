import { createUseStyles } from "react-jss";

export const useHomeStyle = createUseStyles({
  homeStyle: {
    scrollBehavior: "smooth",
    display: "flex",
    flexDirection: "column",
  },
  section: {
    paddingBlock: 70,
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc( 100vh + 20px )",
    color: ({ theme }: { theme: AppTheme }) => theme?.colorBlack,
  },
  sectionTitle: {
    fontSize: 44,
    // paddingBlockEnd: 50,
    color: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
  },
  sectionBg: {
    "&:nth-child(even)": {
      backgroundColor: ({ theme }: { theme: AppTheme }) => theme?.colorLight,
    },
    "&:nth-child(odd)": {
      backgroundColor: ({ theme }: { theme: AppTheme }) => theme?.colorWhite,
    },
  },
});
