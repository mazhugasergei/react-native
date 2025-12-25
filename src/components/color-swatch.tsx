import { StyleSheet, Text, View } from "react-native"

interface ColorSwatchProps {
	name: string
	color: string
	isDark?: boolean
}

const ColorSwatch = ({ name, color, isDark = false }: ColorSwatchProps) => (
	<View style={styles.container}>
		<View style={[styles.swatch, { backgroundColor: color }]} />
		<Text style={[styles.text, { color: isDark ? "#ffffff" : "#000000" }]}>{name}</Text>
		<Text style={[styles.text, { color: isDark ? "#ffffff" : "#000000" }]}>{color}</Text>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 4,
		alignItems: "center",
		minWidth: 120,
		maxWidth: 120,
	},
	swatch: {
		width: "100%",
		aspectRatio: 1,
		borderRadius: 8,
		marginBottom: 4,
		borderWidth: 1,
		borderColor: "rgba(0,0,0,0.1)",
	},
	text: {
		fontSize: 11,
		textAlign: "center",
	},
})

export default ColorSwatch
