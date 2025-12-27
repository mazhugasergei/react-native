import { defaultIconSize } from "@/lib/constants"
import { SettingsScreenNavigationProp } from "@/lib/types"
import { useNavigation } from "@react-navigation/native"
import { BellIcon, CreditCardIcon, InfoIcon, LockIcon, PaletteIcon, ShieldIcon, UserIcon } from "lucide-react-native"
import { StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { List } from "react-native-paper"

export function Home() {
	const navigation = useNavigation<SettingsScreenNavigationProp>()

	return (
		<ScrollView style={styles.container}>
			<List.Section>
				<List.Subheader>Account</List.Subheader>
				<List.Item
					title="Profile"
					left={({ color, style }) => <UserIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
					onPress={() => {}}
				/>
				<List.Item
					title="Account Security"
					left={({ color, style }) => <ShieldIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
					onPress={() => {}}
				/>
				<List.Item
					title="Payment Methods"
					left={({ color, style }) => <CreditCardIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
					onPress={() => {}}
				/>
			</List.Section>

			<List.Section>
				<List.Subheader>Preferences</List.Subheader>
				<List.Item
					title="Appearance"
					left={({ color, style }) => <PaletteIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
					onPress={() => navigation.navigate("Appearance")}
				/>
				<List.Item
					title="Notifications"
					left={({ color, style }) => <BellIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
					onPress={() => {}}
				/>
				<List.Item
					title="Privacy"
					left={({ color, style }) => <LockIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
					onPress={() => {}}
				/>
			</List.Section>

			<List.Section>
				<List.Subheader>About</List.Subheader>
				<List.Item
					title="App info"
					description="Version, etc."
					left={({ color, style }) => <InfoIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
					onPress={() => navigation.navigate("Info")}
				/>
				<List.Item
					title="Help & Support"
					left={({ color, style }) => <InfoIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
					onPress={() => navigation.navigate("Help")}
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
