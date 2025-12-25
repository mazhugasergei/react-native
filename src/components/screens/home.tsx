import ColorSwatch from "@/components/color-swatch"
import { useThemeStore } from "@/utils/store/theme"
import { getColorSections } from "@/utils/theme-utils"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export function HomeScreen() {
	const { palette } = useThemeStore()
	const isDark = palette.dark
	const backgroundColor = palette.colors.background
	const textColor = palette.colors.onBackground

	const colorSections = getColorSections(palette)

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor }} edges={["top", "left", "right"]}>
			<ScrollView style={[styles.container, { backgroundColor }]}>
				<Text style={[styles.title, { color: textColor }]}>Theme Colors</Text>
				{colorSections.map((section, index) => (
					<View key={index} style={styles.section}>
						<Text style={[styles.sectionTitle, { color: textColor }]}>{section.title}</Text>
						<View style={styles.swatchContainer}>
							{section.colors.map((item, i) => (
								<ColorSwatch key={i} name={item.name} color={item.color} isDark={isDark} />
							))}
						</View>
					</View>
				))}
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 8,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		marginVertical: 12,
		textAlign: "center",
	},
	section: {
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 8,
		paddingHorizontal: 4,
	},
	swatchContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		paddingHorizontal: 4,
	},
})
