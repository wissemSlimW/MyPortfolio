import { createContext } from "react";
import { DEFAULT_VALUES } from "./AppContext.cnst";

export const AppContext = createContext<AppContextModel>(DEFAULT_VALUES);
