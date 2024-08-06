import { Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { useOnScreen } from "../../../../Hooks";
import { useGlobalStyles } from "../../../../Styles/global.style";
import { useHomeStyle } from "../../Home.style";

export const Experience = () => {
  const { ref, onScreen } = useOnScreen();
  const theme = useTheme<AppTheme>();
  const classes = {
    ...useHomeStyle({ theme }),
    ...useGlobalStyles({ theme }),
  };
  return (
    <Grid
      component="section"
      id="experience"
      className={`${classes.section} ${
        onScreen ? classes.animationVisble : classes.animationHidden
      }`}
      {...{ ref }}
    >
      Experience
    </Grid>
  );
};
