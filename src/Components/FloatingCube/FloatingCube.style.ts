import { createUseStyles } from "react-jss";

export const useFloatingCubeStyle = createUseStyles({
  cubeContainer: {
    paddingBlock: 30,
    paddingInline: 15,
    "&:hover": {
      "&>div": {
        // transform: "rotateX(-30deg) rotateY(-45deg) translateZ(50px)",
        // animation: "$rotate 4s linear infinite",
      },
    },
  },
  cube: {
    position: "relative",
    height: 100,
    width: 150,
    transformStyle: "preserve-3d",
    transform: "rotateX(-30deg) rotateY(-15deg)",
    animation: "$rotate 4s linear infinite",
    "&>:nth-child(1)": {
      position: "absolute",
      insetInlineStart: 0,
      insetBlockStart: 0,
      width: 150,
      height: 150,
      backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorLight,
      transform: "rotateX(90deg) translateZ(75px)",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    "&>:nth-child(2)": {
      position: "absolute",
      insetBlockStart: 0,
      insetInlineStart: 0,
      width: "100%",
      height: "100%",
      display: 'block',
      transformStyle: "preserve-3d",
      "&>:nth-child(1)": {
        transform: " rotateY(0deg) translateZ(75px)",
      },
      "&>:nth-child(2)": {
        transform: " rotateY(90deg) translateZ(75px)",
      },
      "&>:nth-child(3)": {
        transform: " rotateY(180deg) translateZ(75px)",
      },
      "&>:nth-child(4)": {
        transform: " rotateY(270deg) translateZ(75px)",
      },
      "&>span": {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        width: "100%",
        height: "100%",
        background: ({ theme }: { theme: AppTheme }) =>
          `linear-gradient(${theme.colorLight} ,${theme.colorPrimary})`,
      },
    },
    "&>:nth-child(3)": {
      content: "",
      position: "absolute",
      insetInlineStart: 0,
      insetBlockStart: 0,
      width: 150,
      height: 150,
      background: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
      transform: "rotateX(90deg) translateZ(-50px)",
      filter: "blur(5px)",
      boxShadow: ({ theme }: { theme: AppTheme }) =>
        `0 0 120px ${theme.colorPrimary}`,
    },
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotateX(-30deg) rotateY(-15deg) translateY(0px)",
    },
    "50%": {
      transform: "rotateX(-30deg) rotateY(-15deg) translateY(20px)",
    },
    "100%": {
      transform: "rotateX(-30deg) rotateY(-15deg) translateY(0px)",
    },
  },
  nameContainer: {
    color: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
    fontSize: 16,
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'center',
    paddingBlock: 10
  }
});
