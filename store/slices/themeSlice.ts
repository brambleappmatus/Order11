export interface ThemeState {
  isDarkMode: boolean;
}

export interface ThemeSlice {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const createThemeSlice = (set: any): ThemeSlice => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state: any) => ({ isDarkMode: !state.isDarkMode })),
});