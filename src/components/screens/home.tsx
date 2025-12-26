import { useThemeStore } from "@/utils/store/theme"
import { ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export function Home() {
	const { palette } = useThemeStore()
	const backgroundColor = palette.colors.background

	return (
		<SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
			<ScrollView style={[styles.container, { backgroundColor }]}></ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 8,
	},
})
