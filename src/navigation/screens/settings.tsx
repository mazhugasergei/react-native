import { useThemeStore } from "@/store/theme"
import { View } from "react-native"
import { List, Switch } from "react-native-paper"

export function SettingsScreen() {
	const { theme, setTheme } = useThemeStore()

	return (
		<View style={{ flex: 1, padding: 16 }}>
			<List.Section>
				<List.Item
					title="Dark Mode"
					description="Toggle between light and dark theme"
					left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
					right={() => (
						<Switch value={theme === "dark"} onValueChange={(value) => setTheme(value ? "dark" : "light")} />
					)}
				/>
			</List.Section>
		</View>
	)
}
