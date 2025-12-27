import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type SettingsStackParamList = {
	Home: undefined
	Appearance: undefined
	Info: undefined
	Help: undefined
}

export type SettingsScreenNavigationProp = NativeStackNavigationProp<SettingsStackParamList, "Home">
