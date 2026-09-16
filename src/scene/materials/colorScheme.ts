export interface ColorScheme<T extends string = string> {
    label: string;
    slots: Partial<Record<T, string>>;
}