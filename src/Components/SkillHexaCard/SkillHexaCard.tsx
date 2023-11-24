import { Grid } from "@mui/material";
import { useTheme } from "react-jss";
import { useSkillHexaCardStyles } from "./SkillHexaCard.style";

export const SkillHexaCard = ({
  card,
}: {
  card: Skill;

  className?: string;
}) => {
  const theme = useTheme<AppTheme>();
  const classes = useSkillHexaCardStyles({ theme });
  return (
    <Grid className={classes.container}>
      <Grid component="span" className={classes.card}></Grid>
      <Grid className={classes.subCard}>
        <Grid
          component="img"
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
