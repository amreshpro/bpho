import { ReactNode } from "react";
import { ThemeContextType, useThemeContext } from "../context/context";
export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const { theme }: ThemeContextType = useThemeContext();

  console.log(theme);
  return (
    <div
      className={`${
        theme == "dark"
          ? "dark"
          : "light"
      }`}
    >
      {children}
    </div>
  );
}
