import React, { useContext, useState } from 'react';
import { changeCssVariables } from '@services/changeCssVariables';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'neitral';

const ThemeContext = React.createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null);

  const changeTheme = (theme) => {
    setTheme(theme);
    changeCssVariables(theme);
  }

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: changeTheme }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
}