import { routes } from "@/lib/constants"
import "react-native-gesture-handler"
import { BottomNavigation } from "react-native-paper"

interface Props {
	index: number
	setIndex: (index: number) => void
}

export function Screens({ index, setIndex }: Props) {
	return BottomNavigation.SceneMap(Object.fromEntries(routes.map((route) => [route.key, route.component])))({
		route: routes[index],
		jumpTo: (key: string) => setIndex(routes.findIndex((r) => r.key === key)),
	})
}
