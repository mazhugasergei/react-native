import { defaultIconSize } from "@/lib/constants"
import { useNavigation } from "@react-navigation/native"
import { Info, PaletteIcon, UserIcon } from "lucide-react-native"
import { List } from "react-native-paper"

export function SettingsScreen() {
	const navigation = useNavigation()

	return (
		<>
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
		</>
	)
}
