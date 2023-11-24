import { Grid, IconButton } from "@mui/material";
import { useContext } from "react";
import { useTheme } from "react-jss";
import { DarkMode } from "../../Assets/Svg/DarkMode";
import { LightMode } from "../../Assets/Svg/LightMode";
import { AppContext } from "../../Context";
import { joinStyleClasses } from "../../Utils";
import { ColorsMenu } from "../ColorsMenu";
import { useHeaderStyles } from "./Header.style";
import { MobileHeader } from "../MobileHeader";

export const Header = () => {
  const context = useContext(AppContext);
  const theme = useTheme<AppTheme>();
  const classes = useHeaderStyles({ theme });
  return (
    <Grid component={"header"} container>
      <Grid
        className={joinStyleClasses(classes.header)}
        sx={{ display: { xs: "none", md: "flex" } }}
        container
      >
        <Grid
          component={"nav"}
          className={joinStyleClasses(classes.navBar)}
          container
          item
          xs={12}
          md={11}
        >
          <ColorsMenu
            value={context.themeColor}
            onClick={(color) => context.setThemeColor!(color)}
          />
          <Grid component={"a"} href="/#main" className={classes.navLink}>
            Home
          </Grid>
          <Grid component={"a"} href="/#about" className={classes.navLink}>
            About
          </Grid>
          <Grid component={"a"} href="/#skills" className={classes.navLink}>
            Skills
          </Grid>
          <Grid component={"a"} href="/#projects" className={classes.navLink}>
            Projects
          </Grid>
          <Grid component={"a"} href="/#contact" className={classes.navLink}>
            Contact
          </Grid>
          <IconButton
            className={classes.modeSwitcherButton}
            onClick={() =>
              context.setMode?.(context.mode === "DARK" ? "LIGHT" : "DARK")
            }
          >
            {context.mode === "DARK" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Grid>
      </Grid>
      <MobileHeader />
    </Grid>
  );
};
