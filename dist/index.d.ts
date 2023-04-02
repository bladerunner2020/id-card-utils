export declare type IdFormatType = 'decimal' | 'decimal-reverse' | 'hex' | 'hex-reverse';
export declare const toHex: (s: string) => string;
export declare const formHex: (s: string) => string;
export declare const reverseHex: (id: string) => string;
export declare const reverseDecimal: (id: string) => string;
export declare const toDecimal: (id: string, sourceType: IdFormatType) => string;
export declare const convertFormat: (id: string, source: IdFormatType, dest: IdFormatType) => string;
