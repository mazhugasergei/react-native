import { ColorGallery } from "@/components/colors-gallery"
import { useThemeStore } from "@/utils/store/theme"
import { useNavigation } from "@react-navigation/native"
import { Grid, ImageIcon, Moon, Type } from "lucide-react-native"
import { StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Divider, List, Switch } from "react-native-paper"

export function Appearance() {
	const navigation = useNavigation()
	const { theme, setTheme } = useThemeStore()

	const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

	return (
		<ScrollView style={styles.container}>
			<List.Section>
				<List.Subheader>Theme</List.Subheader>

				<List.Item
					title="Dark mode"
					description={theme === "dark" ? "On" : "Off"}
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
				<List.Subheader>Interface</List.Subheader>

				<List.Item
					title="Font size"
					description="Adjust text size"
					left={({ color, style }) => <Type color={color} size={22} style={style} />}
					right={() => <List.Icon icon="chevron-right" />}
					onPress={() => navigation.navigate("FontSize" as never)}
				/>

				<List.Item
					title="Display density"
					description="Adjust content spacing"
					left={({ color, style }) => <Grid color={color} size={22} style={style} />}
					right={() => <List.Icon icon="chevron-right" />}
					onPress={() => navigation.navigate("DisplayDensity" as never)}
				/>
			</List.Section>

			<List.Section>
				<List.Subheader>Customization</List.Subheader>

				<List.Item
					title="App icon"
					description="Change app icon"
					left={({ color, style }) => <ImageIcon color={color} size={22} style={style} />}
					right={() => <List.Icon icon="chevron-right" />}
					onPress={() => navigation.navigate("AppIcon" as never)}
				/>
			</List.Section>

			<Divider style={styles.divider} />

			<List.Section>
				<List.Subheader>Colors</List.Subheader>
				<ColorGallery />
			</List.Section>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	switchContainer: {
		justifyContent: "center",
	},
	container: {
		flex: 1,
	},
	divider: {
		marginVertical: 8,
	},
})
