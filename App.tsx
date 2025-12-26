import { Home } from "@/components/screens/home"
import { Settings } from "@/components/screens/settings"
import { tabIconSize } from "@/lib/constants"
import { useThemeStore } from "@/utils/store/theme"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CommonActions, NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { HomeIcon, SettingsIcon } from "lucide-react-native"
import { useEffect } from "react"
import { useColorScheme } from "react-native"
import "react-native-gesture-handler"
import { BottomNavigation, PaperProvider } from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"

const Tab = createBottomTabNavigator()

const routes = [
	{ key: "home", title: "Home", icon: HomeIcon, component: Home },
	{ key: "settings", title: "Settings", icon: SettingsIcon, component: Settings },
]

export default function App() {
	const colorScheme = useColorScheme()
	const { palette, theme, navigationTheme, setTheme } = useThemeStore()

	useEffect(() => {
		if (colorScheme) setTheme(colorScheme)
	}, [colorScheme, setTheme])

	return (
		<SafeAreaProvider style={{ backgroundColor: palette.colors.background }}>
			<NavigationContainer theme={navigationTheme}>
				<PaperProvider theme={palette}>
					<StatusBar style={theme === "dark" ? "light" : "dark"} />
					<Tab.Navigator
						screenOptions={{ headerShown: false }}
						tabBar={({ state, navigation }) => (
							<BottomNavigation.Bar
								navigationState={{
									index: state.index,
									routes: state.routes.map((r) => {
										const routeInfo = routes.find((route) => route.key === r.name)
										if (!routeInfo) throw new Error(`No route info for ${r.name}`)
										return {
											key: r.name,
											title: routeInfo.title,
											icon: routeInfo.icon,
										}
									}),
								}}
								onTabPress={({ route }) => {
									const screen = routes.find((r) => r.key === route.key)
									if (!screen) return

									// Always reset the stack, even if the tab is already active
									navigation.dispatch(
										CommonActions.reset({
											index: 0,
											routes: [{ name: screen.key }],
										})
									)
								}}
								renderIcon={({ route, color }) => {
									const Icon = routes.find((r) => r.key === route.key)?.icon
									return Icon ? <Icon color={color} size={tabIconSize} /> : null
								}}
								activeColor={palette.colors.primary}
								inactiveColor={palette.colors.secondary}
							/>
						)}
					>
						{routes.map((route) => (
							<Tab.Screen
								key={route.key}
								name={route.key}
								component={route.component}
								options={{
									tabBarIcon: ({ color }) => {
										const Icon = route.icon
										return <Icon color={color} size={tabIconSize} />
									},
								}}
							/>
						))}
					</Tab.Navigator>
				</PaperProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
