import "@/global.css"
import { StatusBar } from "expo-status-bar"
import { Text, useColorScheme, View } from "react-native"

export default function App() {
	const colorScheme = useColorScheme()

	return (
		<>
			<View className="flex-1 items-center justify-center bg-white">
				<Text className="text-xl font-bold">Hi</Text>
			</View>
			<StatusBar style="auto" />
		</>
	)
}
