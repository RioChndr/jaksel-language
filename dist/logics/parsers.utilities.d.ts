export declare const operatorMap: {
    readonly itu: " == ";
    readonly gak: " != ";
    readonly "lebih gede": " > ";
    readonly "lebih kecil": " < ";
    readonly "lebih gede sama dengan": " >= ";
    readonly "lebih kecil sama dengan": " <= ";
};
export declare const booleanReplacement: (test: string) => "true" | "false" | null;
export declare const valueReplacements: (test: string) => string;
