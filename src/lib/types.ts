import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type SettingsStackParamList = {
	Home: undefined
	Appearance: undefined
	Info: undefined
}

export type SettingsScreenNavigationProp = NativeStackNavigationProp<SettingsStackParamList, "Home">
