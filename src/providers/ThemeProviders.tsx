import {  type ReactNode, useState } from "react";
import { ThemeContext } from "../context/context";



export default function ThemeProviders({children}:{children:ReactNode}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={{theme,setTheme}} >
      {children}
    </ThemeContext.Provider>
  );
}