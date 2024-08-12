import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useContext, useMemo } from "react";
import { useTheme } from "react-jss";
import { useParams } from "react-router";
import { PROJECT_CARDS, SKILL_CARDS } from "../../Assets/data";
import { FloatingCube, SliderCarousel } from "../../Components";
import { projectImages } from "../../Constants/images";
import { fadeX, fadeY, joinStyleClasses, scale } from "../../Utils";
import { useProjectStyles } from "./Projects.style";
import { AppContext } from "../../Context";

export const Projects = () => {
  const { id } = useParams();
  const context = useContext(AppContext);
  const theme = useTheme<AppTheme>();
  const classes = useProjectStyles({ theme });
  const project = useMemo(() => PROJECT_CARDS.find((p) => p.id === id), [id]);

  return (
    <Grid
      className={joinStyleClasses(
        classes.projectPage,
        context.mode === "LIGHT" ? classes.sectionBg : ""
      )}
      container
      spacing={10}
    >
      <Grid
        component={"section"}
        id="hero"
        item
        xs={12}
        container
        className={classes.section}
      >
        <Grid
          container
          item
          xs={11}
          md={10}
          lg={8}
          className={joinStyleClasses(classes.block, classes.hero)}
        >
          <Grid container item xs={12} md={6}>
            <motion.h1
              className={classes.nameContainer}
              {...scale({ size: 1.3 })}
            >
              {project?.title}
            </motion.h1>
            <motion.p
              className={classes.heroDescription}
              {...fadeY({ delay: 0.2 })}
            >
              {project?.description[0]}
            </motion.p>
            <motion.a
              {...fadeY({ delay: 0.6 })}
              href={"#overView"}
              className={classes.heroBtn}
            >
              details
            </motion.a>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            className={classes.heroLogoContainer}
          >
            <Grid className={classes.imgWrapper}>
              <motion.img
                {...scale({ delay: 0.2, size: 0.5 })}
                className={classes.heroLogo}
                alt="logo"
                src={project?.logo}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        component={"section"}
        id="overView"
        item
        xs={12}
        container
        className={classes.section}
      >
        <Grid
          container
          item
          xs={11}
          md={10}
          className={classes.block}
          justifyContent={"center"}
        >
          <Grid item xs={12} lg={6} className={classes.showCaseContent}>
            <motion.h2
              {...fadeY({ delay: 0.5, distance: -40 })}
              // viewport={{ once: true }}
              className={classes.descriptiontTitle}
            >
              Project OverView
            </motion.h2>
            <motion.div
              {...fadeY({ delay: 0.5, distance: 100 })}
              // viewport={{ once: true }}
              className={classes.descriptionText}
            >
              {project?.description.map((text, index) => (
                <motion.li
                  key={index}
                  {...fadeY({ delay: 0.3 + 0.1 * index, distance: 40 })}
                  // viewport={{ once: true }}
                >
                  {text}
                </motion.li>
              ))}
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={6}
            className={classes.showCaseImgContainer}
          >
            <Grid className={classes.showCaseImgWrapper}>
              <motion.img
                {...fadeX({ delay: 0.5, distance: 100 })}
                // viewport={{ once: true, amount: "some" }}
                className={classes.showCaseImg}
                src={projectImages[id as ProjectNames].original[0]}
              ></motion.img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        component={"section"}
        id="contributions"
        item
        xs={12}
        container
        className={classes.section}
      >
        <Grid
          container
          item
          xs={11}
          md={10}
          className={classes.block}
          justifyContent={"center"}
        >
          <Grid
            item
            xs={12}
            md={8}
            lg={6}
            className={classes.showCaseImgContainer}
          >
            <Grid className={classes.showCaseImgWrapper}>
              <motion.img
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
                // viewport={{ once: true, amount: "some" }}
                className={classes.showCaseImg}
                src={projectImages[id as ProjectNames].collage}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} className={classes.showCaseContent}>
            <motion.h2
              {...fadeY({ delay: 0.5, distance: -40 })}
              // viewport={{ once: true }}
              className={classes.descriptiontTitle}
            >
              Contribution
            </motion.h2>
            <Grid component="ul" className={classes.contributionText}>
              {project?.contributions.map((text, index) => (
                <motion.li
                  key={index}
                  className={classes.listItems}
                  {...fadeY({ delay: 0.3 + 0.1 * index, distance: 40 })}
                  // viewport={{ once: true }}
                >
                  {text}
                </motion.li>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        component={"section"}
        id="slideShow"
        className={classes.section}
        container
      >
        <Grid container item xs={11} md={10} className={classes.block}>
          <motion.h2
            {...fadeY({ delay: 0.5, distance: -40 })}
            viewport={{ once: true }}
            className={classes.slideShowTitle}
          >
            SlideShow
          </motion.h2>
          <Grid className={classes.carouselContainer}>
            {id && (
              <SliderCarousel cards={projectImages[id as ProjectNames] || []} />
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        component={"section"}
        id="technologies"
        item
        xs={12}
        container
        className={classes.section}
      >
        <Grid container item xs={11} md={10} lg={8}>
          <Grid container className={classes.technologiesBlock}>
            <Grid
              container
              item
              xs={11}
              md={10}
              lg={9}
              className={classes.technologiesContainer}
            >
              <Grid component="h2" className={classes.descriptiontTitle}>
                {" <Technologies/>"}
              </Grid>
              <Grid container className={classes.technologiesList}>
                {project?.technologies.map((t, key) => (
                  <FloatingCube
                    {...{ key }}
                    index={key}
                    card={SKILL_CARDS.find((c) => c.id === t)!}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
