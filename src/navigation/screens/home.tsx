import { Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

export function HomeScreen() {
	return (
		<SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Home</Text>
		</SafeAreaView>
	)
}
