import { StyleSheet, View } from "react-native"
import { List } from "react-native-paper"

export function FontSizeScreen() {
	return (
		<View style={styles.container}>
			<List.Section>
				<List.Item title="Small" />
				<List.Item title="Medium" right={(props) => <List.Icon {...props} icon="check" />} />
				<List.Item title="Large" />
				<List.Item title="Extra Large" />
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
