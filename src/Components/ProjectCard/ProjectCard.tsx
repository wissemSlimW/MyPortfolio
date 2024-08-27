import { Button, Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { useNavigate } from "react-router";
import { useOnScreen } from "../../Hooks";
import { useGlobalStyles } from "../../Styles/global.style";
import { joinStyleClasses } from "../../Utils";
import { useProjectCardStyles } from "./ProjectCard.style";
import { useState } from "react";

export const ProjectCard = ({
  card,
  index,
}: {
  card: Project;
  index: number;
}) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
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
      <Grid
        className={classes.cardBlockContent}
        onClick={() => navigate(`/projects/${card.id}`)}
      >
        <Grid className={classes.cardThumbnail}>
          <Grid
            className={joinStyleClasses(
              classes.thumbContent,
              loaded ? "" : classes.loadingImgAnimation
            )}
            style={
              loaded
                ? {}
                : {
                    filter: "blur(20px)",
                    backgroundImage: `url(${card.mainSmall})`,
                  }
            }
          >
            <Grid
              component="img"
              loading="lazy"
              src={card.mainImage}
              onLoad={() => setLoaded(true)}
              style={{ visibility: loaded ? "visible" : "hidden" }}
              className={classes.thumbnailImg}
            ></Grid>
            <Grid className={classes.thumbTitleContainer}>
              <Grid component={"span"}>{card.title}</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.cardThumbnailBack}>
          <Grid className={classes.cardBlock}>
            <Grid className={classes.animationContainer}>
              <Grid className={classes.cardAnimation}></Grid>
            </Grid>
            <Grid className={classes.card}>
              <Grid
                className={joinStyleClasses(
                  classes.backThumbImgContainer,
                  loaded ? "" : classes.loadingImgAnimation
                )}
                style={
                  loaded
                    ? {}
                    : {
                        filter: "blur(20px)",
                        backgroundImage: `url(${card.mainSmall})`,
                      }
                }
              >
                <Grid
                  component="img"
                  style={{ visibility: loaded ? "visible" : "hidden" }}
                  alt="project wallpaper"
                  className={classes.imageStyle}
                  src={card.mainImage}
                ></Grid>
              </Grid>
              <Grid component={"h4"} className={classes.title}>
                {card.title}
              </Grid>
              <Grid className={classes.descriptionContainer}>
                <Grid>{card.description}</Grid>
              </Grid>
              <Button variant="contained" className={classes.buttonStyle}>
                View more details
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
