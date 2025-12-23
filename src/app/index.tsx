import "@/global.css"
import { StatusBar } from "expo-status-bar"
import { Text, useColorScheme, View } from "react-native"

export function App() {
	const colorScheme = useColorScheme()

	return (
		<>
			<View className="flex-1 items-center justify-center bg-green-400">
				<Text className="text-7xl font-bold text-white">Hi</Text>
			</View>
			<StatusBar style="auto" />
		</>
	)
}
