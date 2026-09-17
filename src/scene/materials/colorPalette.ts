export const colorPalette = {
    'pike-green': { label: 'Pike Green', hex: '#aca946' },
    'strike-orange': { label: 'Strike Orange', hex: '#D08E21' },
    'cod-white': { label: 'Cod White', hex: '#F8F6E5' },
} as const;

export type ColorId = keyof typeof colorPalette;