import { useThemeStore } from "@/utils/store/theme"
import { createStackNavigator } from "@react-navigation/stack"
import { AppIconScreen } from "./app-icon"
import { Appearance } from "./appearance"
import { DisplayDensityScreen } from "./display-density"
import { FontSizeScreen } from "./font-size"
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
			<Stack.Screen name="FontSize" component={FontSizeScreen} options={{ title: "Font size" }} />
			<Stack.Screen name="AppIcon" component={AppIconScreen} options={{ title: "App icon" }} />
			<Stack.Screen name="DisplayDensity" component={DisplayDensityScreen} options={{ title: "Display density" }} />
			<Stack.Screen name="Info" component={InfoScreen} options={{ title: "App info" }} />
			<Stack.Screen name="Help" component={HelpScreen} options={{ title: "Help & Support" }} />
		</Stack.Navigator>
	)
}
