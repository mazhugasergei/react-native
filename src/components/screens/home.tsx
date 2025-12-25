import ColorSwatch from "@/components/color-swatch"
import { useThemeStore } from "@/utils/store/theme"
import { getColorSections } from "@/utils/theme-utils"
import { ScrollView, StyleSheet, Text, View } from "react-native"

export function HomeScreen() {
	const { palette } = useThemeStore()
	const isDark = palette.dark
	const backgroundColor = palette.colors.background
	const textColor = palette.colors.onBackground

	const colorSections = getColorSections(palette)

	return (
		<ScrollView style={[styles.container, { backgroundColor }]}>
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
