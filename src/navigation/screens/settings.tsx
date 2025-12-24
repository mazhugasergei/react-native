import { useThemeStore } from "@/utils/store/theme"
import { Bell, Info, Moon, User } from "lucide-react-native"
import { StyleSheet, View } from "react-native"
import { List, Switch } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

export function SettingsScreen() {
	const { theme, setTheme } = useThemeStore()
	const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<List.Section>
				<List.Subheader>Account</List.Subheader>
				<List.Item
					title="Profile"
					description="View your profile"
					left={({ color, style }) => <User color={color} size={22} style={style} />}
					onPress={() => {}}
				/>
				<List.Item
					title="Notifications"
					description="Manage notification settings"
					left={({ color, style }) => <Bell color={color} size={22} style={style} />}
					onPress={() => {}}
				/>
			</List.Section>

			<List.Section>
				<List.Subheader>Appearance</List.Subheader>
				<List.Item
					title="Dark mode"
					description="Use dark theme"
					left={({ color, style }) => <Moon color={color} size={22} style={style} />}
					right={() => (
						<View style={styles.switchContainer}>
							<Switch value={theme === "dark"} onValueChange={toggleTheme} />
						</View>
					)}
					onPress={toggleTheme}
				/>
			</List.Section>

			<List.Section>
				<List.Subheader>About</List.Subheader>
				<List.Item
					title="App info"
					description="Version, licenses, etc."
					left={({ color, style }) => <Info color={color} size={22} style={style} />}
					onPress={() => {}}
				/>
			</List.Section>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	switchContainer: {
		justifyContent: "center",
	},
})
