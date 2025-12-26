import { Navbar } from "@/components/navbar"
import { Screens } from "@/components/screens"
import { useThemeStore } from "@/utils/store/theme"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { useColorScheme } from "react-native"
import "react-native-gesture-handler"
import { PaperProvider } from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
	const [index, setIndex] = useState(0)
	const colorScheme = useColorScheme()
	const { palette, theme, navigationTheme, setTheme } = useThemeStore()

	useEffect(() => {
		if (colorScheme) {
			setTheme(colorScheme)
		}
	}, [colorScheme, setTheme])

	return (
		<SafeAreaProvider style={{ backgroundColor: palette.colors.background }}>
			<NavigationContainer theme={navigationTheme}>
				<PaperProvider theme={palette}>
					<StatusBar style={theme === "dark" ? "light" : "dark"} />
					<Screens index={index} setIndex={setIndex} />
					<Navbar index={index} setIndex={setIndex} />
				</PaperProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
