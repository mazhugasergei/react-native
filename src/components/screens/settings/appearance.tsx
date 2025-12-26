import { useThemeStore } from "@/utils/store/theme"
import { Moon } from "lucide-react-native"
import { StyleSheet, View } from "react-native"
import { List, Switch } from "react-native-paper"

export function Appearance() {
	const { theme, setTheme } = useThemeStore()
	const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

	return (
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
	)
}

const styles = StyleSheet.create({
	switchContainer: {
		justifyContent: "center",
	},
})
