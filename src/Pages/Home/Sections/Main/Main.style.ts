import { createUseStyles } from "react-jss";

export const useMainStyle = createUseStyles({
  imgContainer: {
    display: "flex",
    paddingInlineEnd: 20,
  },
  imageContainer: {
    marginBlockEnd: 30,
    top: 0,
    width: 400,
    aspectRatio: 1,
    borderRadius: "50%",
    overflow: "hidden",
    // padding: 50,
    position: "relative",
    transition: '2s',
    animation: '$move 2s infinite ease-in-out'
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    maxWidth: 400,
    maxHeight: 400,
    aspectRatio: 1,
    objectFit: "contain",
    borderRadius: "50%",
  },
  bgImg: {
    position: 'absolute',
    insetBlockEnd: -10,
    insetInline: "10%",
    width: '80%',
    aspectRatio: 1,
    zIndex: -1,
    borderRadius: "50%",
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
    boxShadow: ({ theme }: { theme: AppTheme }) => `0px 0px 5px ${theme.colorPrimary}`,
  },
  text: { fontSize: 28, fontWeight: 700 },
  animatedTextTyped: {
    color: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
    fontSize: 30,
    fontWeight: 700
  },
  profileName: {
    color: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
    fontSize: 48,
    lineHeight: 1.4,
    fontWeight: 700
  },
  contentContainer: {
    alignItems: "center",
    borderRadius: 20,
    padding: 20,
  },
  contentCardBg: {
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorWhite
  },
  animateBackgroundContainer: {
    position: "relative",
  },
  foregroundContainer: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    zIndex: 10,
    position: "relative",
    inset: 0,
  },
  '@keyframes move': {
    '0% 100%': {
      top: 0
    },
    '50%': {
      top: 10
    }
  },
  description: {
    paddingBlock: 30,
    fontSize: 14,
    fontWeight: 600,
  },
  profileDescription: {
    lineHeight: 1.75,
    color: ({ theme }: { theme: AppTheme }) => theme.colorDark
  },
  linkContainer: {
    display: 'flex',
    alignItems: "center",
    gap: 10
  },
  linkIcon: {
    height: 44,
    width: 44,
    borderRadius: '50%',
    fill: ({ theme }: { theme: AppTheme }) => theme.colorWhite,
    "&&&>path , rect": {
      fill: ({ theme }: { theme: AppTheme }) => theme.colorPrimary
    },
    "&:hover": {
      backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
      "&&&>path , rect": {
        fill: ({ theme }: { theme: AppTheme }) => theme.colorWhite

      }
    }
  }
});
