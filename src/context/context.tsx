import { createContext, useContext } from "react";


export const ThemeContext = createContext<string>('light')

export const useThemeContext = ()=>useContext(ThemeContext)