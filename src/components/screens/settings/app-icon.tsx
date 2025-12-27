import { StyleSheet, View } from "react-native"
import { List } from "react-native-paper"

export function AppIconScreen() {
	return (
		<View style={styles.container}>
			<List.Section>
				<List.Item
					title="Default"
					description="Standard app icon"
					left={(props) => <List.Icon {...props} icon="image" />}
					right={(props) => <List.Icon {...props} icon="check" />}
				/>
				<List.Item
					title="Minimal"
					description="Simplified design"
					left={(props) => <List.Icon {...props} icon="image" />}
				/>
				<List.Item title="Dark" description="Dark theme icon" left={(props) => <List.Icon {...props} icon="image" />} />
				<List.Item
					title="Colorful"
					description="Vibrant colors"
					left={(props) => <List.Icon {...props} icon="image" />}
				/>
			</List.Section>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
})
