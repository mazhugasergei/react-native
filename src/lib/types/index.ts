import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"

export type MCIName = keyof typeof MaterialCommunityIcons.glyphMap

export type Route = {
	key: string
	title: string
	icon: MCIName
}
