import { darkThemeColors, lightThemeColors } from "@/lib/constants"
import { AppNavigator } from "@/navigation"
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { useColorScheme } from "react-native"
import "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"

// Custom Material You theme
const lightTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		...lightThemeColors,
	},
}

const darkTheme = {
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		...darkThemeColors,
	},
}

export function App() {
	const colorScheme = useColorScheme()

	return (
		<SafeAreaProvider>
			<NavigationContainer theme={colorScheme === "dark" ? darkTheme : lightTheme}>
				<StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
				<AppNavigator />
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
