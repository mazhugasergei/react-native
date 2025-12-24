import {
	MD3DarkTheme as defaultDarkTheme,
	MD3LightTheme as defaultLightTheme,
	MD3Theme as defaultTheme,
} from "react-native-paper"
import { create } from "zustand"

type Theme = "light" | "dark"

interface ThemeStore {
	theme: Theme
	palette: defaultTheme
	setTheme: (theme: Theme) => void
}

export const lightTheme = {
	...defaultLightTheme,
	colors: {
		...defaultLightTheme.colors,

		primary: "rgb(90, 90, 90)",
		onPrimary: "rgb(255, 255, 255)",
		primaryContainer: "rgb(220, 220, 220)",
		onPrimaryContainer: "rgb(30, 30, 30)",

		secondary: "rgb(110, 110, 110)",
		onSecondary: "rgb(255, 255, 255)",
		secondaryContainer: "rgb(225, 225, 225)",
		onSecondaryContainer: "rgb(35, 35, 35)",

		tertiary: "rgb(130, 130, 130)",
		onTertiary: "rgb(255, 255, 255)",
		tertiaryContainer: "rgb(230, 230, 230)",
		onTertiaryContainer: "rgb(40, 40, 40)",

		error: "rgb(176, 0, 32)",
		onError: "rgb(255, 255, 255)",
		errorContainer: "rgb(255, 218, 214)",
		onErrorContainer: "rgb(65, 0, 7)",

		background: "rgb(250, 250, 250)",
		onBackground: "rgb(30, 30, 30)",

		surface: "rgb(250, 250, 250)",
		onSurface: "rgb(30, 30, 30)",

		surfaceVariant: "rgb(230, 230, 230)",
		onSurfaceVariant: "rgb(70, 70, 70)",

		outline: "rgb(140, 140, 140)",
		outlineVariant: "rgb(200, 200, 200)",

		shadow: "rgb(0, 0, 0)",
		scrim: "rgb(0, 0, 0)",

		inverseSurface: "rgb(45, 45, 45)",
		inverseOnSurface: "rgb(240, 240, 240)",
		inversePrimary: "rgb(180, 180, 180)",

		elevation: {
			level0: "transparent",
			level1: "rgb(245, 245, 245)",
			level2: "rgb(240, 240, 240)",
			level3: "rgb(235, 235, 235)",
			level4: "rgb(232, 232, 232)",
			level5: "rgb(228, 228, 228)",
		},

		surfaceDisabled: "rgba(30, 30, 30, 0.12)",
		onSurfaceDisabled: "rgba(30, 30, 30, 0.38)",
		backdrop: "rgba(50, 50, 50, 0.4)",
	},
}

export const darkTheme = {
	...defaultDarkTheme,
	colors: {
		...defaultDarkTheme.colors,

		primary: "rgb(200, 200, 200)",
		onPrimary: "rgb(30, 30, 30)",
		primaryContainer: "rgb(70, 70, 70)",
		onPrimaryContainer: "rgb(235, 235, 235)",

		secondary: "rgb(180, 180, 180)",
		onSecondary: "rgb(25, 25, 25)",
		secondaryContainer: "rgb(50, 50, 50)",
		onSecondaryContainer: "rgb(230, 230, 230)",

		tertiary: "rgb(160, 160, 160)",
		onTertiary: "rgb(20, 20, 20)",
		tertiaryContainer: "rgb(55, 55, 55)",
		onTertiaryContainer: "rgb(225, 225, 225)",

		error: "rgb(255, 180, 171)",
		onError: "rgb(105, 0, 5)",
		errorContainer: "rgb(147, 0, 10)",
		onErrorContainer: "rgb(255, 180, 171)",

		background: "rgb(18, 18, 18)",
		onBackground: "rgb(230, 230, 230)",

		surface: "rgb(18, 18, 18)",
		onSurface: "rgb(230, 230, 230)",

		surfaceVariant: "rgb(60, 60, 60)",
		onSurfaceVariant: "rgb(200, 200, 200)",

		outline: "rgb(140, 140, 140)",
		outlineVariant: "rgb(60, 60, 60)",

		shadow: "rgb(0, 0, 0)",
		scrim: "rgb(0, 0, 0)",

		inverseSurface: "rgb(230, 230, 230)",
		inverseOnSurface: "rgb(40, 40, 40)",
		inversePrimary: "rgb(120, 120, 120)",

		elevation: {
			level0: "transparent",
			level1: "rgb(30, 30, 30)",
			level2: "rgb(28, 28, 28)",
			level3: "rgb(26, 26, 26)",
			level4: "rgb(24, 24, 24)",
			level5: "rgb(22, 22, 22)",
		},

		surfaceDisabled: "rgba(230, 230, 230, 0.12)",
		onSurfaceDisabled: "rgba(230, 230, 230, 0.38)",
		backdrop: "rgba(50, 50, 50, 0.4)",
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
