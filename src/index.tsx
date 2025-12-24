import { AppNavigator } from "@/navigation"
import { useThemeStore } from "@/utils/store/theme"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { useColorScheme } from "react-native"
import "react-native-gesture-handler"
import { PaperProvider } from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"

export function App() {
	const colorScheme = useColorScheme()
	const { theme, palette, setTheme } = useThemeStore()

	useEffect(() => {
		if (colorScheme) {
			setTheme(colorScheme)
		}
	}, [colorScheme, setTheme])

	return (
		<SafeAreaProvider style={{ backgroundColor: palette.colors.background }}>
			<NavigationContainer>
				<PaperProvider theme={palette}>
					<StatusBar style={theme === "dark" ? "light" : "dark"} />
					<AppNavigator />
				</PaperProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
