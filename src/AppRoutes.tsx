import { Grid } from "@mui/material";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { PageLayout } from "./Components/PageLayout/PageLayout";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";

export const AppRoutes = () => {
  return (
    <Grid>
      <BrowserRouter>
        <Routes>
          <Route
            path="/projects/:id"
            element={<PageLayout children={<Projects />} />}
          ></Route>
          <Route path="/" element={<PageLayout children={<Home />} />}></Route>
          <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </Grid>
  );
};
