import { Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { PROJECT_CARDS, SKILL_CARDS } from "../../Assets/data";
import { useHomeStyle } from "./Home.style";
import { About, Contact, Projects, Skills } from "./Sections";
import { Main } from "./Sections/Main";
import { useLocation } from "react-router";
import { useEffect, useRef } from "react";

export const Home = () => {
  const { hash } = useLocation();
  const theme = useTheme<AppTheme>();
  const classes = useHomeStyle({ theme });
  return (
    <Grid component="main" className={classes.homeStyle}>
      {(hash === "" || hash === "#main") && <Main />}
      {hash === "#about" && <About />}
      {hash === "#skills" && <Skills cards={SKILL_CARDS} />}
      {hash === "#projects" && <Projects cards={PROJECT_CARDS} />}
      {hash === "#contact" && <Contact />}
    </Grid>
  );
};
