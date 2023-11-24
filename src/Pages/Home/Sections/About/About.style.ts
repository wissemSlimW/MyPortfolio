import { createUseStyles } from "react-jss";

export const useAboutStyle = createUseStyles({
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    paddingBlockEnd: 20
  },
  imgStyle: {
    width: "min(100%,300px)",
    objectFit: 'contain'
  },
  aboutColor: {
    color: ({ theme }: { theme: AppTheme }) => theme.colorDark,
  },
  infoblock: {
    borderRadius: 20,
    paddingBlockEnd: 50,
    padding: 20,
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorWhite
  },
  infoCard: {
    fontWeight: 600,
    padding: 15,
    maxWidth: 250,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: 5,
    width: '100%',
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
    color: ({ theme }: { theme: AppTheme }) => theme.colorWhite,
  },
  cardsContainer: {
    gap: 20,
    display: 'flex',
    justifyContent: 'center'
  },
  description: {
    paddingBlockStart: 20,
    paddingBlockEnd: 50,
    paddingInline: 10,
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: 500,
  },
  resumeBtn: {
    cursor: "pointer",
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
    borderRadius: 10,
    padding: 10,
    height: 44,
    fontSize: 16,
    fontWeight: 500,
    color: ({ theme }: { theme: AppTheme }) => theme.colorWhite,
    boxShadow: ({ theme }: { theme: AppTheme }) => `0px 2px 10px 2px ${theme.colorPrimary}`,
  }
});
