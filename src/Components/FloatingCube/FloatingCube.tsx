import { Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { useFloatingCubeStyle } from "./FloatingCube.style";
import { motion } from "framer-motion";
import { fadeY } from "../../Utils";
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
    <motion.div
      {...fadeY({ delay: 0.1 * index, distance: 20 })}
      className={classes.cubeContainer}
    >
      <Grid className={classes.cube}>
        <Grid
          component="span"
          style={{ backgroundImage: `url(${card.logo})` }}
        ></Grid>
        <Grid>
          <Grid component="span" className={classes.nameContainer}>
            {card.name}
          </Grid>
          <Grid component="span"></Grid>
          <Grid component="span"></Grid>
          <Grid component="span"></Grid>
          <Grid component="span"></Grid>
          <Grid component="span"></Grid>
        </Grid>
        <Grid component="span"> </Grid>
      </Grid>
    </motion.div>
  );
};
