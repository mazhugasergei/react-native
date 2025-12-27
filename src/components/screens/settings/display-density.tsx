import { StyleSheet, View } from "react-native"
import { List } from "react-native-paper"

export function DisplayDensityScreen() {
	return (
		<View style={styles.container}>
			<List.Section>
				<List.Item title="Compact" description="More content, less space" />
				<List.Item
					title="Default"
					description="Standard spacing"
					right={(props) => <List.Icon {...props} icon="check" />}
				/>
				<List.Item title="Comfortable" description="More space between items" />
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
