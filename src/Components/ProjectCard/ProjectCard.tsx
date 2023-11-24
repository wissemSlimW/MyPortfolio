import { Button, Grid } from "@mui/material";
import { useGlobalStyles } from "../../Styles/global.style";
import { joinStyleClasses } from "../../Utils";
import { useProjectCardStyles } from "./ProjectCard.style";
import { useTheme } from "react-jss";
import { createRef, useContext } from "react";
import { useOnScreen } from "../../Hooks";
import { useNavigate } from "react-router";
import { AppContext } from "../../Context";

export const ProjectCard = ({
  card,
  index,
}: {
  card: Project;
  className?: string;
  index: number;
}) => {
  const context = useContext(AppContext);
  const navigate = useNavigate()
  const ref = createRef<HTMLDivElement>();
  const onScreen = useOnScreen(ref);
  const theme = useTheme<AppTheme>();
  const classes = {
    ...useProjectCardStyles({ theme }),
    ...useGlobalStyles({ theme }),
  };

  return (
    <Grid
      component={"div"}
      container
      item
      xs={12}
      sm={6}
      md={4}
      xl={4}
      ref={ref}
      className={joinStyleClasses(
        classes.cardContainer,
        context.mode === "DARK" ? classes.hoverAnimationDark : classes.hoverAnimationLight,
        onScreen ? classes.cardMountAnimation : "",
      )}
      style={{ animationDuration: `${1 + index * 0.1}s` }}
    >
      <Grid>
        <Grid className={classes.animationContainer}>
          <Grid className={classes.cardAnimation}></Grid>
        </Grid>
        <Grid className={classes.card}>
          <Grid
            component={"img"}
            className={classes.imageStyle}
            src={card.mainImage}
          ></Grid>
          <Grid component={"h4"} className={classes.title}>
            {card.title}
          </Grid>
          <Grid className={classes.descriptionContainer}>
            <Grid>{card.description}</Grid>
          </Grid>
          <Button variant="contained" className={classes.buttonStyle} onClick={() => navigate(`/projects/${card.id}`)}>
            View more details
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
