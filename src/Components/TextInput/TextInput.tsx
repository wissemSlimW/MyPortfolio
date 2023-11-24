import { Grid, TextField, TextFieldProps } from "@mui/material";
import { useTheme } from "react-jss";
import { useTextInputStyles } from "./TextInput.style";
import { useContext } from "react";
import { AppContext } from "../../Context";
import { joinStyleClasses } from "../../Utils";

export const TextInput = (props: TextFieldProps) => {
  const theme = useTheme<AppTheme>();
  const context = useContext(AppContext);
  const classes = useTextInputStyles({ theme });
  return (
    <Grid
      className={joinStyleClasses(
        classes.TextInputContainer,
        context.mode === "DARK"
          ? classes.TextInputContainerDark
          : classes.TextInputContainerLight
      )}
    >
      <TextField
        variant="outlined"
        fullWidth
        InputLabelProps={{
          className: joinStyleClasses(
            context.mode === "DARK"
              ? classes.labelStyleDark
              : classes.labelStyleLight
          ),
        }}
        FormHelperTextProps={{
          className: joinStyleClasses(
            context.mode === "DARK"
              ? classes.labelStyleDark
              : classes.labelStyleLight
          ),
        }}
        {...props}
      />
    </Grid>
  );
};
