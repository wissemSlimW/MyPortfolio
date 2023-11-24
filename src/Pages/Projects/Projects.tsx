import { Grid } from "@mui/material";
import { useMemo } from "react";
import { useTheme } from "react-jss";
import { useParams } from "react-router";
import { PROJECT_CARDS, SKILL_CARDS } from "../../Assets/data";
import { FloatingCube, SliderCarousel } from "../../Components";
import { projectImages } from "../../Constants/images";
import { useProjectStyles } from "./Projects.style";

export const Projects = () => {
  const {id } = useParams();
  const theme = useTheme<AppTheme>();
  const classes = useProjectStyles({ theme });
  const project = useMemo(() => PROJECT_CARDS.find((p) => p.id === id), [id]);
  
  return (
    <Grid className={classes.projectPage}>
      <Grid className={classes.contentContainer}>
        <Grid component="h1" className={classes.nameContainer}>
          {project?.title}
        </Grid>
        <Grid className={classes.carouselContainer}>
          {id && <SliderCarousel cards={projectImages[id as ProjectNames]|| []} />}
        </Grid>
        <Grid container className={classes.descriptionContainer}>
          <Grid item xs={11} md={10} lg={7}>
            <Grid
              item
              xs={12}
              component="h2"
              className={classes.descriptiontTitle}
            >
            Description
            </Grid>
            <Grid className={classes.descriptionText}>
              {project?.description.map((paragraph, key)=> <Grid key={key} component= "p"> {paragraph}</Grid>)}
            </Grid>
            <Grid
              item
              xs={12}
              component="h2"
              className={classes.descriptiontTitle}
            >
              Contribution
            </Grid>
            <Grid component="ul" className={classes.contributionText}>
              {project?.contributions.map((c,key) => (
                <Grid component="li" className={classes.listItems} {...{key}} >{c} </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.technologiesBlock}>
          <Grid
            container
            item
            xs={11}
            md={10}
            lg={9}
            className={classes.technologiesContainer}
          >
            <Grid component="h2" className={classes.descriptiontTitle}>
             {" <Technologies/>"}
            </Grid>
            <Grid container className={classes.technologiesList}>
              {project?.technologies.map((t, key) => (
                <FloatingCube
                  {...{ key }}
                  index={key}
                  card={SKILL_CARDS.find((c) => c.id === t)!}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
