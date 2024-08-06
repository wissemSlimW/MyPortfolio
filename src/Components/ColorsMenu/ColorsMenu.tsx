import { useTheme } from "react-jss";
import { useColorsMenuStyles } from "./ColorsMenu.style";
import { themeColors } from "../../Styles/colors";
import { Grid, IconButton } from "@mui/material";
import { PaintBoard, PaintBoardFull } from "../../Assets/Svg";
import { useState } from "react";
import { joinStyleClasses } from "../../Utils";

export const ColorsMenu = ({
  onClick,
  value,
}: {
  value: ColorsName;
  onClick: (color: ColorsName) => void;
}) => {
  const theme = useTheme<AppTheme>();
  const classes = useColorsMenuStyles({ theme });
  const [open, setOpen] = useState(false);
  const colors = Object.keys(themeColors) as ColorsName[];
  return (
    <Grid className={classes.dialMenu} onClick={() => setOpen(!open)}>
      <IconButton disableRipple>
        <PaintBoard
          width={32}
          height={32}
          className={joinStyleClasses(classes.btnIcon)}
        />
      </IconButton>
      {open &&
        colors.map((color, i, items) => (
          <a
            key={i}
            onClick={() => onClick(color)}
            className={joinStyleClasses(
              classes.btns,
              value === color ? classes.selected : ""
            )}
            style={{
              backgroundColor: `hsl(${themeColors[color]}, 89%, 41%)`,
              transform: `translateY(70%) translateX(100%) rotate(-${
                Math.PI / 50 + (i * Math.PI) / items.length + (Math.PI * 3) / 2
              }rad) translateX(35px)`,
            }}
          />
        ))}
    </Grid>
  );
};
