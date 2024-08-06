import { Grid } from "@mui/material";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { PageLayout } from "./Components/PageLayout/PageLayout";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
import { routes } from "./config";

export const AppRoutes = () => {
  return (
    <Grid>
      <BrowserRouter>
        <Routes>
          <Route
            path={`/${routes.projects}/:id`}
            element={<PageLayout children={<Projects />} />}
          ></Route>
          <Route
            path={`/${routes.home}`}
            element={<PageLayout children={<Home />} />}
          ></Route>
          <Route
            path="*"
            element={<Navigate to={`/${routes.home}`}></Navigate>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Grid>
  );
};
