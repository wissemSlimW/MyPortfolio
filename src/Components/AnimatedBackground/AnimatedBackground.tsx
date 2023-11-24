import { Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { useAnimatedBackgroundStyles } from "./AnimatedBackground.style";

export const AnimatedBackground = () => {
  const theme = useTheme<AppTheme>();
  const classes = useAnimatedBackgroundStyles({ theme });

  return (
    <Grid className={classes.animatedBackground}>
      {Array(10)
        .fill("")
        .map((_, i) => (
          <Grid
            key={i}
            style={{
              animationDelay: `${i * 0.5}s`,
              left: `${Math.random() * 100}%`,
              width: Math.floor(Math.random() * 80) + 20,
            }}
          ></Grid>
        ))}
    </Grid>
  );
};
