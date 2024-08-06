import { Grid } from "@mui/material";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {

  return (
    <Grid component={"header"} container>
      <DesktopHeader/>
      <MobileHeader />
    </Grid>
  );
};
