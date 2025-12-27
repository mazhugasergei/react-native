import { defaultIconSize } from "@/lib/constants"
import { ClockIcon, CodeIcon, GithubIcon, HeartIcon, InfoIcon, ShieldIcon, SmartphoneIcon } from "lucide-react-native"
import { StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { List, Text, useTheme } from "react-native-paper"

export function InfoScreen() {
	const theme = useTheme()
	const appVersion = "1.0.0"
	const currentYear = new Date().getFullYear()

	const openLink = async (url: string) => {
		// You can implement link opening logic here
		console.log("Opening:", url)
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Text variant="headlineMedium" style={styles.appName}>
					My App
				</Text>
				<Text variant="bodyMedium" style={styles.version}>
					Version {appVersion}
				</Text>
			</View>

			<List.Section>
				<List.Subheader>About</List.Subheader>
				<List.Item
					title="Version"
					description={appVersion}
					left={({ color, style }) => <InfoIcon color={color} size={defaultIconSize} style={style} />}
				/>
				<List.Item
					title="Last Updated"
					description="December 2023"
					left={({ color, style }) => <ClockIcon color={color} size={defaultIconSize} style={style} />}
				/>
				<List.Item
					title="Compatibility"
					description="iOS 15.0+ / Android 10.0+"
					left={({ color, style }) => <SmartphoneIcon color={color} size={defaultIconSize} style={style} />}
				/>
			</List.Section>

			<List.Section>
				<List.Subheader>Legal</List.Subheader>
				<List.Item
					title="Privacy Policy"
					onPress={() => openLink("https://example.com/privacy")}
					left={({ color, style }) => <ShieldIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
				/>
				<List.Item
					title="Terms of Service"
					onPress={() => openLink("https://example.com/terms")}
					left={({ color, style }) => <List.Icon color={color} icon="file-document" style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
				/>
			</List.Section>

			<List.Section>
				<List.Subheader>Development</List.Subheader>
				<List.Item
					title="Source Code"
					onPress={() => openLink("https://github.com")}
					left={({ color, style }) => <CodeIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
				/>
				<List.Item
					title="Contribute"
					description="Help improve this app"
					onPress={() => openLink("https://github.com")}
					left={({ color, style }) => <GithubIcon color={color} size={defaultIconSize} style={style} />}
					right={(props) => <List.Icon {...props} icon="chevron-right" />}
				/>
			</List.Section>

			<View style={styles.footer}>
				<Text variant="bodySmall" style={styles.copyright}>
					© {currentYear} My App. All rights reserved.
				</Text>
				<View style={styles.madeWith}>
					<Text variant="bodySmall" style={styles.madeWithText}>
						Made with
					</Text>
					<HeartIcon size={16} color={theme.colors.error} style={styles.heartIcon} />
					<Text variant="bodySmall" style={styles.madeWithText}>
						by You
					</Text>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		alignItems: "center",
		paddingVertical: 24,
		paddingHorizontal: 16,
	},
	appName: {
		fontWeight: "bold",
		marginBottom: 4,
	},
	version: {
		color: "gray",
	},
	footer: {
		alignItems: "center",
		padding: 24,
		marginTop: 16,
	},
	copyright: {
		color: "gray",
		textAlign: "center",
		marginBottom: 8,
	},
	madeWith: {
		flexDirection: "row",
		alignItems: "center",
	},
	madeWithText: {
		color: "gray",
	},
	heartIcon: {
		marginHorizontal: 4,
	},
})
