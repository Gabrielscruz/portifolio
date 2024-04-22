"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme: string;
}

interface ThemeContextProps {
  theme: string;
  handleTheme: (theme: string) => Promise<void>;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export function ThemeProvider({ children, defaultTheme }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(defaultTheme);

  async function handleTheme(theme: string) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
4;

export const useTheme = (): ThemeContextProps => {
  return useContext(ThemeContext);
};
