import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useTheme } from "react-jss";
import ReactTyped from "react-typed";
import {
  EmailCircle,
  GithubCircle,
  LinkedinCircle,
} from "../../../../Assets/Svg";
import { AnimatedBackground } from "../../../../Components/AnimatedBackground";
import { links } from "../../../../Constants/constants";
import { profileImg, profileImgSmall } from "../../../../Constants/images";
import { AppContext } from "../../../../Context";
import { useOnScreen } from "../../../../Hooks";
import { useGlobalStyles } from "../../../../Styles/global.style";
import { joinStyleClasses } from "../../../../Utils";
import { useHomeStyle } from "../../Home.style";
import { useMainStyle } from "./Main.style";

export const Main = () => {
  const context = useContext(AppContext);
  const { onScreen, ref } = useOnScreen();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    onScreen && context.setMobileMenuHighlight!("main");
  }, [onScreen]);
  const theme = useTheme<AppTheme>();
  const classes = {
    ...useHomeStyle({ theme }),
    ...useMainStyle({ theme }),
    ...useGlobalStyles({ theme }),
  };

  return (
    <Grid
      container
      component="section"
      id="main"
      className={joinStyleClasses(
        classes.section,
        classes.animateBackgroundContainer
      )}
      {...{ ref }}
    >
      {context.mode === "LIGHT" && <AnimatedBackground />}
      <Grid
        container
        item
        xs={11}
        sm={10}
        className={classes.foregroundContainer}
      >
        <Grid item xs={12} md={6} className={classes.imgContainer} container>
          <Grid
            container
            sx={{ justifyContent: { xs: "center", md: "end" } }}
            className={classes.blockContainer}
          >
            <Grid className={classes.imageContainer}>
              <Grid
                className={classes.loadingImg}
                style={
                  loaded
                    ? {}
                    : {
                        filter: "blur(20px)",
                        backgroundImage: `url(${profileImgSmall})`,
                      }
                }
              >
                <Grid
                  component={"img"}
                  className={classes.imgStyle}
                  src={profileImg}
                  alt="profile image"
                  loading="lazy"
                  style={{ visibility: loaded ? "visible" : "hidden" }}
                  onLoad={() => setLoaded(true)}
                ></Grid>
              </Grid>

              <Grid className={classes.bgImg}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          className={joinStyleClasses(
            classes.contentContainer,
            context.mode === "DARK" ? classes.contentCardBg : ""
          )}
        >
          <Grid item xs={12} sx={{ textAlign: { xs: "center", md: "start" } }}>
            <Grid component="h3" className={classes.text}>
              {" "}
              Hello, It's Me
            </Grid>
            <Grid component="h3" className={classes.profileName}>
              Wissem Slim
            </Grid>
            <Grid component="h3" className={classes.animatedText}>
              I'm &nbsp;
              <ReactTyped
                strings={["Software Engineer"]}
                loop
                className={classes.animatedTextTyped}
                typeSpeed={50}
              />
            </Grid>
            <Grid
              container
              className={classes.description}
              sx={{
                justifyContent: { xs: "center", md: "start" },
                textAlign: { xs: "center", md: "justify" },
              }}
            >
              <Grid
                component="p"
                item
                xs={11}
                md={10}
                lg={9}
                className={classes.profileDescription}
              >
                I'm a web developer with 3+ years of experience, specializing in
                user-friendly websites and frontend design. Committed to
                delivering high-quality, innovative solutions with a focus on
                engaging and responsive UIs.
              </Grid>
            </Grid>
            <Grid
              className={classes.linkContainer}
              sx={{ justifyContent: { xs: "center", md: "start" } }}
            >
              <Grid
                className={classes.link}
                component={"a"}
                href={links.github}
                target="_blank"
              >
                <GithubCircle className={classes.linkIcon} />
              </Grid>
              <Grid
                className={classes.link}
                component={"a"}
                href={links.linkedin}
                target="_blank"
              >
                <LinkedinCircle className={classes.linkIcon} />
              </Grid>
              <Grid
                className={classes.link}
                component={"a"}
                href={`mailto:${links.email}`}
              >
                <EmailCircle className={classes.linkIcon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
