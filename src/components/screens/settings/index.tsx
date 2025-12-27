import { useThemeStore } from "@/utils/store/theme"
import { createStackNavigator } from "@react-navigation/stack"
import { Appearance } from "./appearance"
import { HelpScreen } from "./help"
import { Home } from "./home"
import { InfoScreen } from "./info"

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
			<Stack.Screen name="Home" component={Home} options={{ title: "Settings" }} />
			<Stack.Screen name="Appearance" component={Appearance} />
			<Stack.Screen name="Info" component={InfoScreen} options={{ title: "App info" }} />
			<Stack.Screen name="Help" component={HelpScreen} options={{ title: "Help & Support" }} />
		</Stack.Navigator>
	)
}
