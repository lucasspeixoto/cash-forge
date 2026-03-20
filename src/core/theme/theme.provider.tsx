import React, { createContext, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors, type ThemeColors } from './theme.colors';

interface ThemeContextValue {
  colors: ThemeColors;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  return <ThemeContext.Provider value={{ colors, isDark }}>{children}</ThemeContext.Provider>;
}
