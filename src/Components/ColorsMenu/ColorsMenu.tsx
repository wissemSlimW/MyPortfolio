import { useTheme } from "react-jss"
import { useColorsMenuStyles } from "./ColorsMenu.style"
import { themeColors } from "../../Styles/colors";
import { Grid, IconButton } from "@mui/material";
import { PaintBoard, PaintBoardFull } from "../../Assets/Svg";
import { useState } from "react";
import { joinStyleClasses } from "../../Utils";




export const ColorsMenu = ({ onClick, value }: { value: ColorsName, onClick: (color: ColorsName) => void }) => {
    const theme = useTheme<AppTheme>()
    const classes = useColorsMenuStyles({ theme })
    const [open, setOpen] = useState(false)
    const colors = Object.keys(themeColors) as ColorsName[]
    return <Grid className={classes.dialMenu} onClick={() => setOpen(!open)}>
        <IconButton >
            {open ? <PaintBoardFull className={joinStyleClasses(classes.clicked, classes.btnIcon)} /> :
                <PaintBoard className={joinStyleClasses(classes.btnIcon)} />}

        </IconButton>
        {open &&
            colors.map((color, i, items) => <a key={i}
                onClick={() => onClick(color)}
                className={joinStyleClasses(classes.btns, value === color ? classes.selected : '')}
                style={{
                    backgroundColor: `hsl(${themeColors[color]}, 89%, 41%)`,
                    transform: `translateY(350%) translateX(-380%) rotate(${Math.PI / 6 + i * Math.PI / items.length}rad) translateX(45px)`,
                }} />)}
    </Grid>
        ;
};

