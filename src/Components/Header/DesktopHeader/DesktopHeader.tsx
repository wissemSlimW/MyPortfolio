import { Grid, IconButton } from "@mui/material";
import { DarkMode } from "../../../Assets/Svg/DarkMode";
import { LightMode } from "../../../Assets/Svg/LightMode";
import { joinStyleClasses } from "../../../Utils";
import { ColorsMenu } from "../../ColorsMenu";
import { useContext } from "react";
import { AppContext } from "../../../Context";
import { useTheme } from "react-jss";
import { useDesktopHeaderStyles } from "./DesktopHeader.style";
import {
  BriefCase,
  GridView,
  HomeIcon,
  Message,
  Person,
} from "../../../Assets/Svg";
type LinkBtnProps = {
  href: string;
  title: string;
  icon: React.ReactElement;
};
export const DesktopHeader = () => {
  const context = useContext(AppContext);
  const theme = useTheme<AppTheme>();
  const classes = useDesktopHeaderStyles({ theme });
  const LinkBtn = (props: LinkBtnProps) => (
    <Grid component={"a"} href={props.href} className={classes.navLink}>
      <Grid className={classes.navLinkIcon}>{props.icon}</Grid>
      <Grid className={classes.navLinkLabelContainer}>
        <Grid component={"span"} className={classes.navLinkLabel}>
          {props.title}
        </Grid>
      </Grid>
    </Grid>
  );
  const links: LinkBtnProps[] = [
    {
      href: "/#main",
      icon: <HomeIcon width={48} height={48} />,
      title: "Home",
    },
    {
      href: "/#about",
      icon: <Person width={48} height={48} />,
      title: "About",
    },
    {
      href: "/#skills",
      icon: <GridView width={48} height={48} />,
      title: "Skills",
    },
    {
      href: "/#projects",
      icon: <BriefCase width={48} height={48} />,
      title: "Projects",
    },
    {
      href: "/#contact",
      icon: <Message width={48} height={48} />,
      title: "Contact",
    },
  ];
  return (
    <Grid
      className={classes.header}
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
        {links.map((link, i) => (
          <LinkBtn key={i} {...link} />
        ))}
        <Grid className={classes.navLink}>
          <Grid className={classes.navLinkIcon}>
            <IconButton
              disableRipple
              className={classes.modeSwitcherButton}
              onClick={() => {
                const mode = context.mode === "DARK" ? "LIGHT" : "DARK";
                localStorage.setItem("currentMode", mode);
                context.setMode?.(context.mode === "DARK" ? "LIGHT" : "DARK");
              }}
            >
              {context.mode === "DARK" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Grid>
          <Grid className={classes.navLinkLabelContainer}>
            <Grid component={"span"} className={classes.navLinkLabel}>
              {context.mode === "DARK" ? "Light" : "Dark"}
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.navLink}>
          <Grid className={classes.navLinkIcon}>
            <ColorsMenu
              value={context.themeColor}
              onClick={(color) => context.setThemeColor!(color)}
            />
          </Grid>
          {/* <Grid className={classes.navLinkLabelContainer}>
            <Grid component={"span"} className={classes.navLinkLabel}>
              Theme
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};
