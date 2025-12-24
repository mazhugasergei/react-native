import { useThemeStore } from "@/utils/store/theme"
import { Home, Settings } from "lucide-react-native"
import React, { useState } from "react"
import { BottomNavigation, Provider } from "react-native-paper"
import { HomeScreen } from "./screens/home"
import { SettingsScreen } from "./screens/settings"

const iconMap: Record<string, React.FC<any>> = {
	home: Home,
	settings: Settings,
}

export function AppNavigator() {
	const [index, setIndex] = useState(0)
	const { palette } = useThemeStore()

	const routes = [
		{ key: "home", title: "Home", component: HomeScreen },
		{ key: "settings", title: "Settings", component: SettingsScreen },
	]

	const renderScene = BottomNavigation.SceneMap(Object.fromEntries(routes.map((route) => [route.key, route.component])))

	return (
		<Provider theme={palette}>
			{renderScene({
				route: routes[index],
				jumpTo: (key: string) => setIndex(routes.findIndex((r) => r.key === key)),
			})}

			<BottomNavigation.Bar
				navigationState={{ index, routes }}
				onTabPress={({ route }) => setIndex(routes.findIndex((r) => r.key === route.key))}
				renderIcon={({ route, color }) => {
					const Icon = iconMap[route.key]
					return Icon ? <Icon color={color} size={24} /> : null
				}}
				getLabelText={({ route }) => route.title}
			/>
		</Provider>
	)
}
