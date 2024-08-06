import { Grid } from "@mui/material";
import { useContext, useEffect, useMemo, useRef } from "react";
import { useTheme } from "react-jss";
import { Award, Cap } from "../../../../Assets/Svg";
import { resumeLink } from "../../../../Constants/constants";
import { profileImg } from "../../../../Constants/images";
import { AppContext } from "../../../../Context";
import { useOnScreen } from "../../../../Hooks";
import { useGlobalStyles } from "../../../../Styles/global.style";
import { joinStyleClasses } from "../../../../Utils";
import { useHomeStyle } from "../../Home.style";
import { useAboutStyle } from "./About.style";

export const About = () => {
  const context = useContext(AppContext);
  const theme = useTheme<AppTheme>();
  const { onScreen, ref } = useOnScreen();
  const data = useMemo(
    () => [
      {
        label: "Experience",
        icon: <Award width={24} height={24} />,
        description: "+3 years",
      },
      {
        label: "Qualifications",
        icon: <Cap width={24} height={24} />,
        description: "Software Engineer",
      },
    ],
    [theme]
  );
  const imgRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    onScreen && context.setMobileMenuHighlight!("about");
  }, [onScreen]);
  const classes = {
    ...useHomeStyle({ theme }),
    ...useAboutStyle({ theme: { theme, size: imgRef.current?.clientWidth } }),
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
      <Grid container justifyContent={"center"}>
        <Grid container item xs={11} sm={9} className={classes.infoblock}>
          <Grid item xs={12} component={"h1"} className={classes.sectionTitle}>
            <Grid component="span" className={classes.aboutColor}>
              About
            </Grid>
            Me
          </Grid>
          <Grid container item xs={12} className={classes.block}>
            <Grid item xs={12} md={6} className={classes.content}>
              <Grid className={classes.cardsContainer}>
                {data.map((card, key) => (
                  <Grid {...{ key }} className={classes.infoCard}>
                    <Grid className={classes.cardHeader}>
                      <Grid className={classes.cardIcon}>{card.icon}</Grid>
                      <Grid className={classes.cardLabel}>{card.label}</Grid>
                    </Grid>
                    <Grid className={classes.cardDescription}>
                      {card.description}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid className={classes.description}>
                I'm a software engineer with 3 years of experience as a full
                stack developer, well-versed in both frontend and back-end
                technologies. I have a passion for creating intuitive,
                user-friendly and responsive applications and web Designs with a
                keen eye for details. I have experience in technologies such as
                React, NextJs, Flutter, TypeScript, HTML, CSS, and a variety of
                back-end frameworks and databases. I always enjoy working on
                complex projects, solving problems and always striving to find
                the best solution.
              </Grid>
              <Grid container sx={{ justifyContent: { xs: "center" } }}>
                <Grid
                  component="a"
                  download
                  href={resumeLink}
                  className={classes.resumeBtn}
                >
                  DownLoad CV
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} className={classes.imgContainer}>
              <Grid component="span" className={classes.imgStyle} ref={imgRef}>
                <Grid component="span" className={classes.imgBgStart}></Grid>
                <Grid component="span" className={classes.imgBgEnd}></Grid>
                <Grid
                  component="img"
                  src={profileImg}
                  alt="profile image"
                ></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
