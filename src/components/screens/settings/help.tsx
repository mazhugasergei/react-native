import { defaultIconSize } from "@/lib/constants"
import { MailIcon, MessageCircleQuestionIcon, PhoneIcon, ShieldQuestionIcon } from "lucide-react-native"
import { Linking, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { List, Text } from "react-native-paper"

export function HelpScreen() {
	const openEmail = () => {
		Linking.openURL("mailto:support@yourapp.com?subject=Support Request")
	}

	const openPhone = () => {
		Linking.openURL("tel:+1234567890")
	}

	return (
		<ScrollView style={styles.container}>
			<List.Section>
				<List.Item
					title="Email Support"
					description="We'll get back to you within 24 hours"
					left={({ color, style }) => <MailIcon color={color} style={style} size={defaultIconSize} />}
					onPress={openEmail}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
				/>
				<List.Item
					title="Call Us"
					description="Available 9AM - 5PM, Mon-Fri"
					left={({ color, style }) => <PhoneIcon color={color} style={style} size={defaultIconSize} />}
					onPress={openPhone}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
				/>
				<List.Item
					title="Live Chat"
					description="Chat with our support team"
					left={({ color, style }) => <MessageCircleQuestionIcon color={color} style={style} size={defaultIconSize} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
				/>
			</List.Section>

			<List.Section>
				<List.Subheader>Helpful Resources</List.Subheader>
				<List.Item
					title="User Guide"
					left={({ color, style }) => <ShieldQuestionIcon color={color} style={style} size={defaultIconSize} />}
					right={(props) => <List.Icon {...props} icon="open-in-new" />}
				/>
				<List.Item
					title="Video Tutorials"
					left={({ color, style }) => <ShieldQuestionIcon color={color} style={style} size={defaultIconSize} />}
					right={(props) => <List.Icon {...props} icon="open-in-new" />}
				/>
			</List.Section>

			<Text style={styles.footerText}>Last updated: {new Date().toLocaleDateString()}</Text>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	footerText: {
		textAlign: "center",
		color: "#888",
		marginTop: 16,
		marginBottom: 24,
		fontSize: 12,
	},
})
