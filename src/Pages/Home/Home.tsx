import { Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { PROJECT_CARDS, SKILL_CARDS } from "../../Assets/data";
import { useHomeStyle } from "./Home.style";
import { About, Contact, Projects, Skills } from "./Sections";
import { Main } from "./Sections/Main";

export const Home = () => {
  const theme = useTheme<AppTheme>();
  const classes = useHomeStyle({ theme });

  return (
    <Grid component="main" className={classes.homeStyle}>
      <Main />
      <About />
      <Skills
        cards={SKILL_CARDS}
      />
      <Projects
        cards={PROJECT_CARDS}
      />
      <Contact />
    </Grid>
  );
};
