import { Grid } from "@mui/material";
import { useHomeStyle } from "../../Home.style";
import { createRef } from "react";
import { useOnScreen } from "../../../../Hooks";
import { useGlobalStyles } from "../../../../Styles/global.style";
import { useTheme } from "react-jss";

export const Experience = () => {
  const ref = createRef<HTMLElement>();
  const onScreen = useOnScreen(ref);
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
