import { Grid } from "@mui/material";
import { createRef, useContext } from "react";
import { useTheme } from "react-jss";
import { AppContext } from "../../Context";
import { useOnScreen } from "../../Hooks";
import { useGlobalStyles } from "../../Styles/global.style";
import { joinStyleClasses } from "../../Utils";
import { useSkillsCardStyles } from "./SkillCard.style";

export const SkillCard = ({
  card,
  index,
}: {
  card: Skill;
  index: number;
  className?: string;
}) => {
  const ref = createRef<HTMLDivElement>();
  const onScreen = useOnScreen(ref);
  const theme = useTheme<AppTheme>();
  const context = useContext(AppContext);
  const classes = {
    ...useGlobalStyles({ theme }),
    ...useSkillsCardStyles({ theme }),
  };

  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      lg={2.4}
      xl={2}
      {...{ ref }}
      className={joinStyleClasses(
        classes.cardContainer,
        onScreen ? classes.cardSlideAnimation : "",
      )}
      style={{ animationDuration: `${0.5 + index * 0.1}s` }}
    >
      <Grid
        className={joinStyleClasses(
          classes.card,
          context.mode === "DARK"
            ? classes.hoverBorderEffect
            : classes.hoverBgEffect,
        )}
      >
        <Grid
          component="img"
          src={card.logo}
          className={classes.skillCarImage}
        ></Grid>
        <Grid component="b" className={classes.skillCarTitle}>
          {card.name}
        </Grid>
      </Grid>
    </Grid>
  );
};
