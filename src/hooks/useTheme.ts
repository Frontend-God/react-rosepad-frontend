import { useContext } from "react";
import { ThemeContext as StyledThemeContext } from "styled-components";
// import { useThemeManager } from 'state/user/hooks'

export default () => {
  // const [isDark, toggleTheme] = useThemeManager()
  const theme = useContext(StyledThemeContext);
  // return { isDark, theme, toggleTheme }
  return {};
};
