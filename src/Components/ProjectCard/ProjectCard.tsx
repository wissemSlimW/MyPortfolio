import { Button, Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { useNavigate } from "react-router";
import { useOnScreen } from "../../Hooks";
import { useGlobalStyles } from "../../Styles/global.style";
import { joinStyleClasses } from "../../Utils";
import { useProjectCardStyles } from "./ProjectCard.style";

export const ProjectCard = ({
  card,
  index,
}: {
  card: Project;
  index: number;
}) => {
  const navigate = useNavigate();

  const { onScreen, ref } = useOnScreen();
  const theme = useTheme<AppTheme>();
  const classes = {
    ...useProjectCardStyles({ theme }),
    ...useGlobalStyles({ theme }),
  };

  return (
    <Grid
      component={"div"}
      container
      ref={ref}
      className={joinStyleClasses(
        classes.cardContainer,
        classes.hoverAnimationDark,
        onScreen ? classes.cardMountAnimation : ""
      )}
      style={{ animationDuration: `${1 + index * 0.1}s` }}
    >
      <Grid className={classes.cardBlockContent}>
        <Grid className={classes.cardThumbnail}>
          <Grid
            component={"img"}
            src={card.mainImage}
            className={classes.thumbnailImg}
          ></Grid>
        </Grid>
        <Grid className={classes.cardThumbnailBack}>
          <Grid className={classes.cardBlock}>
            <Grid className={classes.animationContainer}>
              <Grid className={classes.cardAnimation}></Grid>
            </Grid>
            <Grid className={classes.card}>
              <Grid
                component={"img"}
                alt="project wallpaper"
                className={classes.imageStyle}
                src={card.mainImage}
              ></Grid>
              <Grid component={"h4"} className={classes.title}>
                {card.title}
              </Grid>
              <Grid className={classes.descriptionContainer}>
                <Grid>{card.description}</Grid>
              </Grid>
              <Button
                variant="contained"
                className={classes.buttonStyle}
                onClick={() => navigate(`/projects/${card.id}`)}
              >
                View more details
              </Button>
            </Grid>
          </Grid>
        </Grid>{" "}
      </Grid>
    </Grid>
  );
};
