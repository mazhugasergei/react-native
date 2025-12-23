import { Route } from "@/lib/types"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { AppBar } from "@react-native-material/core"
import React, { useState } from "react"
import { Dimensions, StatusBar, View } from "react-native"
import { BottomNavigation } from "react-native-paper"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { HomeScreen } from "./screens/home"
import { LibraryScreen } from "./screens/library"
import { SearchScreen } from "./screens/search"

/* ---------- Bottom Navigation ---------- */
const routes: Route[] = [
	{ key: "home", title: "Home", icon: "home" },
	{ key: "search", title: "Search", icon: "magnify" },
	{ key: "library", title: "Library", icon: "bookshelf" },
]

const renderScene = BottomNavigation.SceneMap({
	home: HomeScreen,
	search: SearchScreen,
	library: LibraryScreen,
})

export function AppNavigator() {
	const [index, setIndex] = useState(0)
	const insets = useSafeAreaInsets()
	const title = routes[index].title

	return (
		<View className="flex-1 bg-white">
			<StatusBar barStyle="light-content" backgroundColor="#6750A4" />

			<AppBar
				title={title}
				color="#6750A4"
				elevation={0}
				style={{ paddingTop: insets.top }}
				titleStyle={{ color: "white", fontWeight: "bold", fontSize: 18 }}
			/>

			<BottomNavigation
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				renderScene={renderScene}
				activeColor="#6750A4"
				inactiveColor="#49454F"
				barStyle={{ paddingBottom: insets.bottom }}
				renderIcon={({ route, color }) => <MaterialCommunityIcons name={route.icon} size={24} color={color} />}
			/>
		</View>
	)
}
