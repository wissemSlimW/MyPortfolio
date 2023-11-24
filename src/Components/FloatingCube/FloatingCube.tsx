import { Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { useFloatingCubeStyle } from "./FloatingCube.style";

export const FloatingCube = ({
  card,
  index,
}: {
  card: Skill;
  index: number;
}) => {
  const theme = useTheme<AppTheme>();
  const classes = {
    ...useFloatingCubeStyle({ theme }),
  };

  return (
    <Grid className={classes.cubeContainer}>
      <Grid
        className={classes.cube}
        sx={{ animationDelay: `${0.5 * index}s !important` }}
      >
        <Grid
          component="span"
          style={{ backgroundImage: `url(${card.logo})` }}
        ></Grid>
        <Grid>
          <Grid component="span" className={classes.nameContainer}>{card.name}</Grid>
          <Grid component="span"></Grid>
          <Grid component="span"></Grid>
          <Grid component="span"></Grid>
          <Grid component="span"></Grid>
          <Grid component="span"></Grid>
        </Grid>
        <Grid component="span"> </Grid>
      </Grid>
    </Grid>
  );
};
