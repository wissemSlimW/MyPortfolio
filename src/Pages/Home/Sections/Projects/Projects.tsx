import { Grid } from "@mui/material";
import { Fragment, useContext, useEffect, useRef } from "react";
import { useTheme } from "react-jss";
import { ProjectCard } from "../../../../Components";
import { AppContext } from "../../../../Context";
import { useOnScreen } from "../../../../Hooks";
import { useGlobalStyles } from "../../../../Styles/global.style";
import { joinStyleClasses } from "../../../../Utils";
import { useHomeStyle } from "../../Home.style";
import { useProjectsStyle } from "./Projects.style";

export const Projects = ({ cards }: { cards: Project[] }) => {
  const ref = useRef<HTMLElement>(null);
  const context = useContext(AppContext);
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    onScreen && context.setMobileMenuHighlight!("projects");
  }, [onScreen]);
  const theme = useTheme<AppTheme>();
  const classes = {
    ...useHomeStyle({ theme }),
    ...useProjectsStyle({ theme }),
    ...useGlobalStyles({ theme }),
  };

  return (
    <Grid
      component="section"
      id="projects"
      className={joinStyleClasses(
        classes.section,
        context.mode === "LIGHT" ? classes.sectionBg : ""
      )}
      {...{ ref }}
    >
      <Grid component={'h1'} className={classes.sectionTitle}>Projects</Grid>
      <Grid container justifyContent={"center"}>
        <Grid container item xs={11} sm={10}
          className={classes.projectCardsContainer}
        >
          {cards.map((card, i) => (
            <Fragment key={i}>
              {
                <ProjectCard
                  {...{
                    card,
                    index: i,
                  }}
                />
              }
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
[].pop;
