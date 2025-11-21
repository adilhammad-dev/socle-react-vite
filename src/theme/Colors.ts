export const colors = {
    light: {
        bg: {primary: "#FFFFFF", secondary: "#F7FAFC", tertiary: "#EDF2F7"},
        text: {primary: "#1A202C", secondary: "#4A5568", tertiary: "#A0AEC0"},
        border: {default: "#E2E8F0", hover: "#CBD5E0"},
    },
    dark: {
        bg: {primary: "#0B0C10", secondary: "#cccccc", tertiary: "#FF00FF"},
        text: {primary: "#FFFFFF", secondary: "#C5C6C7", tertiary: "#66748A"},
        border: {default: "#2E3A47", hover: "#3F4E5A"},
    },
} as const;

export const createColorToken = (lightColor: string, darkColor: string) => ({
    value: {
        base: lightColor,
        _dark: darkColor,
    },
});

export const semanticTokens = {
    bg: {
        primary: createColorToken(colors.light.bg.primary, colors.dark.bg.primary),
        secondary: createColorToken(colors.light.bg.secondary, colors.dark.bg.secondary),
        tertiary: createColorToken(colors.light.bg.tertiary, colors.dark.bg.tertiary),
    },
    text: {
        primary: createColorToken(colors.light.text.primary, colors.dark.text.primary),
        secondary: createColorToken(colors.light.text.secondary, colors.dark.text.secondary),
        tertiary: createColorToken(colors.light.text.tertiary, colors.dark.text.tertiary),
    },
    border: {
        default: createColorToken(colors.light.border.default, colors.dark.border.default),
        hover: createColorToken(colors.light.border.hover, colors.dark.border.hover),
    },
};