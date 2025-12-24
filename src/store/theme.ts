import { MD3DarkTheme, MD3LightTheme, MD3Theme } from "react-native-paper"
import { create } from "zustand"

type Theme = "light" | "dark"

interface ThemeStore {
	theme: Theme
	palette: MD3Theme
	setTheme: (theme: Theme) => void
}

const lightTheme = {
	...MD3LightTheme,
	colors: {
		...MD3LightTheme.colors,
	},
}

const darkTheme = {
	...MD3DarkTheme,
	colors: {
		...MD3DarkTheme.colors,
	},
}

export const useThemeStore = create<ThemeStore>((set) => ({
	theme: "light",
	palette: lightTheme,
	setTheme: (theme) =>
		set({
			theme,
			palette: theme === "light" ? lightTheme : darkTheme,
		}),
}))
