import { Grid } from "@mui/material";
import { useContext, useEffect, useMemo, useRef } from "react";
import { useTheme } from "react-jss";
import { AppContext } from "../../../../Context";
import { useOnScreen } from "../../../../Hooks";
import { useGlobalStyles } from "../../../../Styles/global.style";
import { joinStyleClasses } from "../../../../Utils";
import { useHomeStyle } from "../../Home.style";
import { useAboutStyle } from "./About.style";
import { profileImg } from "../../../../Constants/images";
import { Award, Cap } from "../../../../Assets/Svg";
import { resumeLink } from "../../../../Constants/constants";

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const context = useContext(AppContext);
  const theme = useTheme<AppTheme>();
  const onScreen = useOnScreen(ref);
  const data = useMemo(() => [
    {
      label: 'Experience',
      icon: <Award color={theme.colorWhite} />,
      description: '3 years Web developer'
    },
    {
      label: 'Qualifications',
      icon: <Cap color={theme.colorWhite} />,
      description: 'Software Engineer'
    }], [theme])
  useEffect(() => {
    onScreen && context.setMobileMenuHighlight!("about");
  }, [onScreen]);
  const classes = {
    ...useHomeStyle({ theme }),
    ...useAboutStyle({ theme }),
    ...useGlobalStyles({ theme }),
  };

  return (
    <Grid
      container
      component="section"
      id="about"
      className={joinStyleClasses(
        classes.section,
        context.mode === "LIGHT" ? classes.sectionBg : "",
        onScreen ? classes.animationVisble : classes.animationHidden
      )}
      {...{ ref }}
    >
      <Grid container justifyContent={'center'}>
        <Grid container item xs={11} sm={10} className={classes.infoblock}>
          <Grid item xs={12} component={'h1'} className={classes.sectionTitle}> <Grid component="span" className={classes.aboutColor}>About </Grid>Me</Grid>
          <Grid item xs={12} md={5} className={classes.imgContainer}>
            <Grid component="img" src={profileImg} className={classes.imgStyle}></Grid>
          </Grid>
          <Grid item xs={12} md={7} container>
            <Grid item xs={12} className={classes.cardsContainer}>
              {data.map((card, key) =>
                <Grid {...{ key }} className={classes.infoCard}>
                  <Grid>{card.icon}</Grid>
                  <Grid>{card.label}</Grid>
                  <Grid>{card.description}</Grid>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} className={classes.description}>
              I'm a software engineer with 3 years of experience as a full stack developer, well-versed in both frontend and back-end technologies. I have a passion for creating intuitive, user-friendly and responsive
              applications and web Designs with a keen eye for details. I have experience in technologies such as
              React, NextJs, Flutter, TypeScript, HTML, CSS, and a variety of back-end frameworks and databases. I always
              enjoy working on complex projects, solving problems and always striving to find the best solution.
            </Grid>
            <Grid item xs={12} container sx={{ justifyContent: { md: "start", xs: "center" } }}>
              <Grid component='a' download href={resumeLink} className={classes.resumeBtn}> DownLoad CV</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  );
};
