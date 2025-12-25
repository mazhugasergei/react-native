import { defaultIconSize } from "@/lib/constants"
import { useNavigation } from "@react-navigation/native"
import { Info, PaletteIcon, UserIcon } from "lucide-react-native"
import { StyleSheet } from "react-native"
import { List } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

export function SettingsScreen() {
	const navigation = useNavigation()

	return (
		<SafeAreaView style={styles.container}>
			<List.Section>
				<List.Subheader>General</List.Subheader>
				<List.Item
					title="Profile"
					left={({ color, style }) => <UserIcon color={color} size={defaultIconSize} style={style} />}
					onPress={() => {}}
				/>
				<List.Item
					title="Appearance"
					left={({ color, style }) => <PaletteIcon color={color} size={defaultIconSize} style={style} />}
					onPress={() => {}}
				/>
			</List.Section>

			<List.Section>
				<List.Subheader>About</List.Subheader>
				<List.Item
					title="App info"
					description="Version, etc."
					left={({ color, style }) => <Info color={color} size={defaultIconSize} style={style} />}
					onPress={() => {}}
				/>
			</List.Section>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
