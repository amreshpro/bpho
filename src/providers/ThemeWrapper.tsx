import { ReactNode } from "react";
import { ThemeContextType, useThemeContext } from "../context/context";
export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const { theme }: ThemeContextType = useThemeContext();

  console.log(theme);
  return (
    <div
      className={`${
        theme == "dark"
          ? "bg-[#10141b] text-gray-300"
          : "bg-blue-100 text-blue-900"
      }`}
    >
      {children}
    </div>
  );
}
