import { createUseStyles } from "react-jss";

export const useSkillsCardStyles = createUseStyles({
  card: {
    width: "100%",
    aspectRatio: 0.8,
    backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorLight,
    borderRadius: 15,
    padding: 15,
  },
  hoverBorderEffect: {
    "&:hover":
      // {
      //   boxShadow: ({ theme }: { theme: AppTheme }) =>
      //     `0px 0px 15px ${theme.colorPrimaryLight}`,
      //   padding: 10,
      // },
      {
        // boxShadow: ({ theme }: { theme: AppTheme }) => "1px 1px 7px red",
        animation: "$yellow 2s ease-in-out infinite",
      },
  },
  hoverBgEffect: {
    "&:hover": {
      "&&&": { backgroundSize: "400%" },
      animation: "$gradient 5s ease ",
      background: ({ theme }: { theme: AppTheme }) =>
        `linear-gradient(-45deg,${theme.colorPrimaryLight},${theme.colorPrimaryLight},${theme.colorLight},${theme.colorPrimaryLight},${theme.colorPrimaryLight})`,
      padding: 10,
    },
  },

  cardContainer: {
    padding: 10,
  },
  skillCarImage: {
    width: "100%",
    aspectRatio: 1,
    objectFit: "cover",
    objectPosition: "center",
  },
  skillCarTitle: {
    fontSize: 16,
    width: "100%",
    justifyContent: "center",
    display: "flex",
    color: ({ theme }: { theme: AppTheme }) => theme.colorDark,
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  "@keyframes brightBorder": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },

  "@keyframes yellow": {
    to: {
      boxShadow: `0px 0px 7px white`,
    },
  },
});
