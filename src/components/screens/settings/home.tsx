import { defaultIconSize } from "@/lib/constants"
import { SettingsScreenNavigationProp } from "@/lib/types"
import { useNavigation } from "@react-navigation/native"
import { Info, PaletteIcon, UserIcon } from "lucide-react-native"
import { StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { List } from "react-native-paper"

export function Home() {
	const navigation = useNavigation<SettingsScreenNavigationProp>()

	return (
		<ScrollView style={styles.container}>
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
					onPress={() => navigation.navigate("Appearance")}
				/>
			</List.Section>

			<List.Section>
				<List.Subheader>About</List.Subheader>
				<List.Item
					title="App info"
					description="Version, etc."
					left={({ color, style }) => <Info color={color} size={defaultIconSize} style={style} />}
					onPress={() => navigation.navigate("Info")}
				/>
			</List.Section>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
