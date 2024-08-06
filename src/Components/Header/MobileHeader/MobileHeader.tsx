import { Grid, IconButton } from "@mui/material";
import { ReactNode, useContext } from "react";
import { useTheme } from "react-jss";
import {
  BriefCase,
  DarkMode,
  GridView,
  HomeIcon,
  LightMode,
  Message,
  Person,
} from "../../../Assets/Svg";
import { AppContext } from "../../../Context";
import { themeColors } from "../../../Styles/colors";
import { joinStyleClasses } from "../../../Utils";
import { useMobileHeaderStyles } from "./MobileHeader.style";

export const MobileHeader = ({ className }: { className?: string }) => {
  const context = useContext(AppContext);
  const theme = useTheme<AppTheme>();
  const classes = { ...useMobileHeaderStyles({ theme }) };
  const items: {
    icon: ReactNode;
    link: string;
    name: string;
    _id: SectionNames;
  }[] = [
      {
        icon: <HomeIcon className={classes.iconStyle} />,
        link: "/#main",
        name: "Home",
        _id: "main",
      },
      {
        icon: <Person className={classes.iconStyle} />,
        link: "/#about",
        name: "About",
        _id: "about",
      },
      {
        icon: <GridView className={classes.iconStyle} />,
        link: "/#skills",
        name: "Skills",
        _id: "skills",
      },
      {
        icon: <BriefCase className={classes.iconStyle} />,
        link: "/#projects",
        name: "Projects",
        _id: "projects",
      },
      {
        icon: <Message className={classes.iconStyle} />,
        link: "/#contact",
        name: "Contact",
        _id: "contact",
      },
    ];
  return (
    <Grid
      sx={{ display: { xs: "flex", md: "none" } }}
      className={classes.headerContainer}
    >
      <Grid
        component="nav"
        className={joinStyleClasses(classes.navStyle, className)}
      >
        <Grid component="ul" className={classes.listStyle}>
          {items.map((item, i) => (
            <Grid
              key={i}
              component="li"
              onClick={() => context.setMobileMenuHighlight!(item._id)}
              className={joinStyleClasses(
                classes.listItemStyle,
                item._id === context.mobileMenuHighlight ? classes.active : "",
              )}
            >
              <Grid
                component="a"
                href={item.link}
                className={classes.anchorStyle}
              >
                {item.icon}
                <Grid component="span" className={classes.textStyle}>
                  {item.name}
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid
          
            className={classes.indicator}
            style={{
              insetInlineStart:
                60 *
                items.findIndex((s) => s._id === context.mobileMenuHighlight),
            }}
          ></Grid>
        </Grid>
        <Grid className={classes.subBlock}>
          <IconButton
            className={classes.modeSwitcherButton}
            onClick={() =>
              context.setMode?.(context.mode === "DARK" ? "LIGHT" : "DARK")
            }
          >
            {context.mode === "DARK" ? <LightMode className={classes.modeIcon} /> : <DarkMode className={classes.modeIcon} />}

          </IconButton>
          <Grid className={classes.colorsContainer}>
            {Object.keys(themeColors).map((color, key) =>
              <Grid {...{ key }} component='span' onClick={() => context.setThemeColor?.(color as ColorsName)}
                style={{ backgroundColor: color }} className={joinStyleClasses(classes.dot, context.themeColor === color ? classes.selected : '')}></Grid>)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
