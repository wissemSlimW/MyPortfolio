import { Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { useSkillHexaCardStyles } from "./SkillHexaCard.style";
import { useOnScreen } from "../../Hooks";
import { joinStyleClasses } from "../../Utils";

export const SkillHexaCard = ({
  card,
  index,
}: {
  card: Skill;
  index: number;
}) => {
  const { onScreen, ref } = useOnScreen();
  const theme = useTheme<AppTheme>();
  const classes = useSkillHexaCardStyles({ theme });
  return (
    <Grid
      className={joinStyleClasses(
        classes.container,
        onScreen ? classes.cardAnimation : ""
      )}
      ref={ref}
      style={{ animationDuration: `${0.5 + index * 0.1}s` }}
    >
      <Grid component="span" className={classes.card}></Grid>
      <Grid className={classes.subCard}>
        <Grid
          component="img"
          alt="skill logo"
          src={card.logo}
          className={classes.skillCarImage}
        />
        <Grid component="b" className={classes.skillCarTitle}>
          {card.name}
        </Grid>
      </Grid>
    </Grid>
  );
};
