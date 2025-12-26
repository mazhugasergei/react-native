import { useThemeStore } from "@/utils/store/theme"
import { getColorSections } from "@/utils/theme-utils"
import { StyleSheet, View } from "react-native"
import { List, Text } from "react-native-paper"

export function ColorGallery() {
	const { palette } = useThemeStore()
	const colorSections = getColorSections(palette)

	return colorSections.map((section, index) => (
		<View key={index} style={styles.section}>
			<List.Subheader>{section.title}</List.Subheader>
			<View style={styles.items}>
				{section.colors.map((item, i) => (
					<View key={i} style={styles.item}>
						<View style={[styles.color, { backgroundColor: item.color }]} />
						<Text style={styles.text}>{item.name}</Text>
						<Text style={styles.text}>{item.color}</Text>
					</View>
				))}
			</View>
		</View>
	))
}

const styles = StyleSheet.create({
	section: {
		marginBottom: 40,
	},

	items: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		gap: 10,
	},

	item: {
		flex: 1,
		alignItems: "center",
		minWidth: "28.94%",
		maxWidth: "28.94%",
	},
	color: {
		width: "100%",
		aspectRatio: 1,
		borderRadius: 8,
		marginBottom: 4,
	},
	text: {
		fontSize: 11,
		textAlign: "center",
	},
})
