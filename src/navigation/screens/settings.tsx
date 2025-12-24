import { useThemeStore } from "@/utils/store/theme"
import { List, Switch } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

export function SettingsScreen() {
	const { theme, setTheme } = useThemeStore()

	return (
		<SafeAreaView style={{ flex: 1, padding: 16 }}>
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
		</SafeAreaView>
	)
}
