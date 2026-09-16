
export interface ColorScheme<T extends string = string> {
    label: string;
    color: string;
    slots: T[];
}