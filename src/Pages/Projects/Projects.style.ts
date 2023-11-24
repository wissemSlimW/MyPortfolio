import { createUseStyles } from "react-jss";

export const useProjectStyles = createUseStyles({
  projectPage: {
    position: "relative",
  },
  backGroundContainer: {},
  contentContainer: {
    paddingBlockEnd: 150,
    position: "absolute",
    insetBlockStart: 0,
    insetInline: 0,
    zIndex: 1,
    paddingBlockStart: 40,
    display: "flex",
    flexDirection: "column",
  },
  nameContainer: {
    color: ({ theme }: { theme: AppTheme }) => theme.colorBlack,
    textAlign: "center",
  },
  carouselContainer: {
    paddingBlockEnd: 30,
    overflow: 'hidden'
  },
  descriptionContainer: {
    justifyContent: "center",
    paddingBlockStart: 50,
    "&>div": {
      padding: 30,
      borderRadius: 20,
      backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorWhite,
    },
  },
  descriptiontTitle: {
    fontWeight: 700,
    color: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
  },
  descriptionText: {
    display:"flex",
    flexDirection:"column",
    gap:10,
    paddingInline: 20,
    color: ({ theme }: { theme: AppTheme }) => theme.colorDark,
    fontWeight: 400,
    fontSize: 14,
    textAlign: "justify",
  },
  contributionText: {
        paddingInline: 20,
    color: ({ theme }: { theme: AppTheme }) => theme.colorDark,
    fontWeight: 400,
    fontSize: 14,
    textAlign: "justify",
  },
  technologiesBlock: {
    justifyContent: 'center',
  },
  technologiesContainer: {
    paddingBlockStart: 30,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },
  technologiesList: {
    display: 'flex',
    justifyContent: 'center'
  },
  listItems: {
    listStyle: "circle"
  }
});
