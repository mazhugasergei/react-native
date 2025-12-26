import { routes } from "@/lib/constants"
import { useThemeStore } from "@/utils/store/theme"
import "react-native-gesture-handler"
import { BottomNavigation } from "react-native-paper"

interface Props {
	index: number
	setIndex: (index: number) => void
}

export function Navbar({ index, setIndex }: Props) {
	const { palette } = useThemeStore()

	return (
		<BottomNavigation.Bar
			navigationState={{ index, routes }}
			onTabPress={({ route }) => setIndex(routes.findIndex((r) => r.key === route.key))}
			renderIcon={({ route, focused, color }) => {
				const Icon = route.icon
				return <Icon color={focused ? color : palette.colors.secondary} size={24} />
			}}
			inactiveColor={palette.colors.secondary}
			getLabelText={({ route }) => route.title}
		/>
	)
}
