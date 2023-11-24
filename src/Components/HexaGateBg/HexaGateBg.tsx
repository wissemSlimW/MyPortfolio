import { Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { useHexaGateBgStyles } from "./HexaGateBg.style";

export const HexaGateBg = () => {
  const theme = useTheme<AppTheme>();
  const classes = useHexaGateBgStyles({ theme });

  return (
    <Grid className={classes.HexaGateBgStyle}>
      <Grid>
        {Array(300)
          .fill("")
          .map((_, i) => (
            <Grid key={i} component={"span"}>
              <Grid component={"span"} ></Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};
