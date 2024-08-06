import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { useTheme } from "react-jss";
import { ProjectCard, Slider } from "../../../../Components";
import { AppContext } from "../../../../Context";
import { useOnScreen } from "../../../../Hooks";
import { useGlobalStyles } from "../../../../Styles/global.style";
import { joinStyleClasses } from "../../../../Utils";
import { useHomeStyle } from "../../Home.style";
import { useProjectsStyle } from "./Projects.style";

export const Projects = ({ cards }: { cards: Project[] }) => {
  const context = useContext(AppContext);
  const { onScreen, ref } = useOnScreen();
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
        context.mode === "LIGHT" ? "" : classes.section,
        context.mode === "LIGHT" ? classes.sectionBg : ""
      )}
      {...{ ref }}
    >
      {context.mode === "LIGHT" ? (
        <Slider list={cards} />
      ) : (
        <>
          <Grid component={"h1"} className={classes.sectionTitle}>
            Projects
          </Grid>
          <Grid container justifyContent={"center"}>
            <Grid
              item
              xs={11}
              sm={10}
              className={classes.projectCardsContainer}
            >
              {cards.map((card, i) => (
                <ProjectCard
                  key={i}
                  {...{
                    card,
                    index: i,
                  }}
                />
              ))}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};
[].pop;
