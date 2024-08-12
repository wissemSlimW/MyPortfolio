import { createUseStyles } from "react-jss";

export const useProjectStyles = createUseStyles((theme: AppTheme) => ({
  projectPage: {
    display: "flex",
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

  carouselContainer: {
    overflow: "hidden",
  },
  descriptionContainer: {
    justifyContent: "center",
    paddingBlockStart: 50,
    "&>div": {
      padding: 30,
      borderRadius: 20,
      backgroundColor: theme.colorWhite,
    },
  },

  technologiesBlock: {
    paddingBlockEnd: 70,
    justifyContent: "center",
  },
  technologiesContainer: {
    paddingBlockStart: 30,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  technologiesList: {
    paddingBlockEnd: 40,
    display: "flex",
    justifyContent: "center",
  },

  section: { justifyContent: "center" },
  block: {
    minHeight: 500,
    background: theme.colorWhite,
    borderRadius: 20,
    alignItems: "center",
  },
  hero: {
    marginBlockStart: 30,
    padding: "5%",
    minHeight: "60dvh ",
  },
  nameContainer: {
    color: theme.colorPrimary,
    textAlign: "start",
    lineHeight: "1.3",
    fontSize: "60px",
    paddingBlock: 20,
  },
  heroDescription: { color: theme.colorBlack, fontSize: 16 },
  heroBtn: {
    marginBlock: 20,
    cursor: "pointer",
    background: theme.colorPrimary,
    padding: 10,
    borderRadius: 10,
    color: "white",
    fontSize: 16,
    fontWeight: 500,
  },
  heroLogoContainer: { display: "flex", height: "100%" },
  imgWrapper: { flex: 1 },
  heroLogo: { marginInlineStart: "auto", width: "100%", aspectRatio: 1 },
  showCaseImgContainer: {
    paddingInline: 20,
    paddingBlock: 30,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  showCaseImgWrapper: {
    display: "flex",
    flex: 1,
  },
  showCaseImg: {
    borderRadius: 15,
    objectFit: "contain",
    width: "100%",
    objectPosition: "center",
  },
  showCaseContent: {
    paddingBlock: 20,
    paddingInline: 15,
  },
  descriptiontTitle: {
    paddingBlock: 20,
    fontSize: 28,
    fontWeight: 700,
    color: theme.colorPrimary,
  },
  descriptionText: {
    gap: 10,
    paddingInline: 20,
    color: theme.colorDark,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "1.75",
    textAlign: "start",
  },
  contributionText: {
    paddingInline: 20,
    color: theme.colorDark,
    fontWeight: 500,
    fontSize: 14,
    textAlign: "start",
    lineHeight: 2,
  },
  listItems: {
    marginBlock: 10,
    listStyle: "circle",
  },

  slideShowTitle: {
    textAlign: "center",
    color: theme.colorPrimary,
    fontSize: 34,
    paddingInline: 20,
    paddingBlock: 30,
    width: "100%",
  },
  sectionBg: {
    "&>:nth-child(even)": {
      backgroundColor: theme?.colorLight,
      "&>:first-child": { background: "transparent" },
    },
    "&>:nth-child(odd)": {
      backgroundColor: theme?.colorWhite,
      "&>:first-child": { background: "transparent" },
    },
  },
}));
