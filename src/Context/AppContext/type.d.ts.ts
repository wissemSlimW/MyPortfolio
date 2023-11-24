type ColorsName =
  | "red"
  | "blue"
  | "green"
  // | "orange"
  | "yellow"
  | "purple"
// | "pink";
type ThemeMode = "DARK" | "LIGHT";
type ThemeColors = Record<ColorsName, number>;
type SectionNames = "main" | "about" | "skills" | "projects" | "contact";
interface AppContextModel {
  themeColor: ColorsName;
  setThemeColor?: (str: ColorsName) => void;
  mode: ThemeMode;
  setMode?: (str: ThemeMode) => void;
  mobileMenuHighlight: SectionNames;
  setMobileMenuHighlight?: (section: SectionNames) => void;
  setShowMenu?: (val: boolean) => void;
  showMenu: boolean;
}
