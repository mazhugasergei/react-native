import { HomeScreen } from "@/components/screens/home"
import { SettingsScreen } from "@/components/screens/settings"
import { useThemeStore } from "@/utils/store/theme"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { HomeIcon, SettingsIcon } from "lucide-react-native"
import { useEffect, useState } from "react"
import { useColorScheme } from "react-native"
import "react-native-gesture-handler"
import { BottomNavigation, PaperProvider } from "react-native-paper"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export function App() {
	const [index, setIndex] = useState(0)
	const colorScheme = useColorScheme()
	const { palette, theme, setTheme } = useThemeStore()

	const routes = [
		{ key: "home", title: "Home", icon: HomeIcon, component: HomeScreen },
		{ key: "settings", title: "Settings", icon: SettingsIcon, component: SettingsScreen },
	]

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

					{/* screens */}
					<SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
						{BottomNavigation.SceneMap(Object.fromEntries(routes.map((route) => [route.key, route.component])))({
							route: routes[index],
							jumpTo: (key: string) => setIndex(routes.findIndex((r) => r.key === key)),
						})}
					</SafeAreaView>

					{/* bottom navigation bar */}
					<BottomNavigation.Bar
						navigationState={{ index, routes }}
						onTabPress={({ route }) => setIndex(routes.findIndex((r) => r.key === route.key))}
						renderIcon={({ route, focused, color }) => {
							const Icon = route.icon
							return <Icon color={focused ? color : palette.colors.onSurface} size={24} />
						}}
						inactiveColor={palette.colors.secondary}
						getLabelText={({ route }) => route.title}
					/>
				</PaperProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
