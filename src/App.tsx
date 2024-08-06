import { useState } from "react";
import { ThemeProvider } from "react-jss";
import { AppRoutes } from "./AppRoutes";
import { AppContext } from "./Context";
import { themes } from "./Styles/theme";
import { DEFAULT_VALUES } from "./Context/AppContext/AppContext.cnst";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [themeColor, setThemeColor] = useState<ColorsName>(
    DEFAULT_VALUES.themeColor
  );
  const [showMenu, setShowMenu] = useState<boolean>(DEFAULT_VALUES.showMenu);
  const [mobileMenuHighlight, setMobileMenuHighlight] = useState(
    DEFAULT_VALUES.mobileMenuHighlight
  );
  const [mode, setMode] = useState<ThemeMode>(
    (localStorage.getItem("currentMode") as ThemeMode) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "DARK"
        : "LIGHT")
  );
  return (
    <AppContext.Provider
      value={{
        themeColor,
        setThemeColor,
        mode,
        setMode,
        mobileMenuHighlight,
        setMobileMenuHighlight,
        showMenu,
        setShowMenu,
      }}
    >
      <ThemeProvider theme={themes(themeColor, mode)}>
        <ToastContainer />
        <AppRoutes />
      </ThemeProvider>
    </AppContext.Provider>
  );
};
