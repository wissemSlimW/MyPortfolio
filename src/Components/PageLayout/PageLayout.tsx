import { Grid } from "@mui/material";
import { Header } from "../Header";
import { usePageLayoutStyles } from "./PageLayout.style";
import { AppContext } from "../../Context";
import { useContext, useEffect, useRef } from "react";
import { HexaGateBg } from "..";
import { useLocation } from "react-router";

export const PageLayout = ({ children }: { children: JSX.Element }) => {
  const classes = usePageLayoutStyles();
  const context = useContext(AppContext);
  const ref = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  useEffect(() => {
    ref.current!.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Grid className={classes.bgContainer}>
      {context.mode === "DARK" && <HexaGateBg />}
      <Grid className={classes.contentContainer}>
        <Grid className={classes.mainContainer}>
          <Header />
          <Grid  {...{ ref }} className={classes.childrenContainer}>{children}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
