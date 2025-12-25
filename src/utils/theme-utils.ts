export const getColorSections = (palette: any) => [
	{
		title: "Primary Colors",
		colors: [
			{ name: "primary", color: palette.colors.primary },
			{ name: "onPrimary", color: palette.colors.onPrimary },
			{ name: "primaryContainer", color: palette.colors.primaryContainer },
			{ name: "onPrimaryContainer", color: palette.colors.onPrimaryContainer },
		],
	},
	{
		title: "Secondary Colors",
		colors: [
			{ name: "secondary", color: palette.colors.secondary },
			{ name: "onSecondary", color: palette.colors.onSecondary },
			{ name: "secondaryContainer", color: palette.colors.secondaryContainer },
			{ name: "onSecondaryContainer", color: palette.colors.onSecondaryContainer },
		],
	},
	{
		title: "Tertiary Colors",
		colors: [
			{ name: "tertiary", color: palette.colors.tertiary },
			{ name: "onTertiary", color: palette.colors.onTertiary },
			{ name: "tertiaryContainer", color: palette.colors.tertiaryContainer },
			{ name: "onTertiaryContainer", color: palette.colors.onTertiaryContainer },
		],
	},
	{
		title: "Error Colors",
		colors: [
			{ name: "error", color: palette.colors.error },
			{ name: "onError", color: palette.colors.onError },
			{ name: "errorContainer", color: palette.colors.errorContainer },
			{ name: "onErrorContainer", color: palette.colors.onErrorContainer },
		],
	},
	{
		title: "Background & Surface",
		colors: [
			{ name: "background", color: palette.colors.background },
			{ name: "onBackground", color: palette.colors.onBackground },
			{ name: "surface", color: palette.colors.surface },
			{ name: "onSurface", color: palette.colors.onSurface },
			{ name: "surfaceVariant", color: palette.colors.surfaceVariant },
			{ name: "onSurfaceVariant", color: palette.colors.onSurfaceVariant },
		],
	},
	{
		title: "Other Colors",
		colors: [
			{ name: "outline", color: palette.colors.outline },
			{ name: "outlineVariant", color: palette.colors.outlineVariant },
			{ name: "inverseSurface", color: palette.colors.inverseSurface },
			{ name: "inverseOnSurface", color: palette.colors.inverseOnSurface },
			{ name: "inversePrimary", color: palette.colors.inversePrimary },
		],
	},
	{
		title: "Elevation",
		colors: Object.entries(palette.colors.elevation).map(([key, value]) => ({
			name: key,
			color: value as string,
		})),
	},
]
