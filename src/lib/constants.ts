import { Home } from "@/components/screens/home"
import { Settings } from "@/components/screens/settings"
import { HomeIcon, SettingsIcon } from "lucide-react-native"

export const defaultIconSize = 22

export const routes = [
	{ key: "home", title: "Home", icon: HomeIcon, component: Home },
	{ key: "settings", title: "Settings", icon: SettingsIcon, component: Settings },
]
