import { Grid } from "@mui/material";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  return (
    <Grid component={"header"} container>
      <Grid sx={{ display: { xs: "none", md: "flex" } }}>
        <DesktopHeader />
      </Grid>
      <Grid sx={{ display: { xs: "flex", md: "none" } }}>
        <MobileHeader />
      </Grid>
    </Grid>
  );
};
