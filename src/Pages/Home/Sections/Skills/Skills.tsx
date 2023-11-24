import { Grid } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { useTheme } from "react-jss";
import { SkillHexaCard } from "../../../../Components";
import { SkillCard } from "../../../../Components";
import { AppContext } from "../../../../Context";
import { useOnScreen } from "../../../../Hooks";
import { useGlobalStyles } from "../../../../Styles/global.style";
import { joinStyleClasses } from "../../../../Utils";
import { useHomeStyle } from "../../Home.style";
import { useSkillsStyle } from "./Skills.style";

export const Skills = ({ cards }: { cards: Skill[] }) => {
  const ref = useRef<HTMLElement>(null);
  const context = useContext(AppContext);
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    onScreen && context.setMobileMenuHighlight!("skills");
  }, [onScreen]);
  const theme = useTheme<AppTheme>();
  const classes = {
    ...useHomeStyle({ theme }),
    ...useGlobalStyles({ theme }),
    ...useSkillsStyle({ theme }),
  };
  return (
    <Grid
      component="section"
      id="skills"
      className={joinStyleClasses(
        classes.skillsSection,
        classes.section,
        context.mode === "LIGHT" ? classes.sectionBg : ""
      )}
      {...{ ref }}
    >
      <Grid component={'h1'} className={classes.sectionTitle}>My Skill set </Grid>
      <Grid container justifyContent={"center"}>
        <Grid container item xs={11} sm={10}
          className={joinStyleClasses(classes.skillCardsContainer)}>
          {cards.map((card, key) =>
            context.mode === "LIGHT" ? (
              <SkillCard {...{ card, key, index: key }} />
            ) : (
              <SkillHexaCard {...{ card, key }} />
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
