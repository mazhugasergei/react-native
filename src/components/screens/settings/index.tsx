import { useThemeStore } from "@/utils/store/theme"
import { createStackNavigator } from "@react-navigation/stack"
import { Appearance } from "./appearance"
import { Home } from "./home"

export function Settings() {
	const Stack = createStackNavigator()
	const { palette } = useThemeStore()

	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: palette.colors.background,
				},
				headerTitleStyle: {
					fontWeight: "600",
					fontSize: 18,
				},
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Appearance" component={Appearance} />
		</Stack.Navigator>
	)
}
