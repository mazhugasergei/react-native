import { useThemeStore } from "@/utils/store/theme"
import { ScrollView, StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

export function Home() {
	const { palette } = useThemeStore()
	const backgroundColor = palette.colors.background

	return (
		<SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
			<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
				<Text variant="titleLarge">Home</Text>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	contentContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
})
