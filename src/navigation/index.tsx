import { Route } from "@/lib/types"
import { useThemeStore } from "@/store/theme"
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import React, { useState } from "react"
import { BottomNavigation, Provider } from "react-native-paper"
import { HomeScreen } from "./screens/home"
import { SettingsScreen } from "./screens/settings"

export function AppNavigator() {
	const [index, setIndex] = useState(0)
	const { theme, palette } = useThemeStore()
	const routes: Route[] = [
		{ key: "home", title: "Home", icon: "home" },
		{ key: "settings", title: "Settings", icon: "cog" },
	]
	const title = routes[index].title

	const renderScene = BottomNavigation.SceneMap({
		home: HomeScreen,
		settings: SettingsScreen,
	})

	return (
		<Provider theme={palette}>
			{renderScene({ route: routes[index], jumpTo: (key: string) => setIndex(routes.findIndex((r) => r.key === key)) })}
			<BottomNavigation.Bar
				navigationState={{ index, routes }}
				onTabPress={({ route }) => {
					const newIndex = routes.findIndex((r) => r.key === route.key)
					if (newIndex !== -1) {
						setIndex(newIndex)
					}
				}}
				renderIcon={({ route, color }) => <Icon name={route.icon} size={24} color={color} />}
				getLabelText={({ route }) => route.title}
			/>
		</Provider>
	)
}
