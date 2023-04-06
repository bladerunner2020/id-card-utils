export type IdCardFormatType = 'decimal' | 'decimal-reverse' | 'hex' | 'hex-reverse';
export declare const ID_CARD_FORMMATS: string[];
export declare const isValidFormat: (type: string) => boolean;
export declare const toHex: (s: string) => string;
export declare const formHex: (s: string) => string;
export declare const reverseHex: (id: string) => string;
export declare const reverseDecimal: (id: string) => string;
export declare const toDecimal: (id: string, sourceType: IdCardFormatType) => string;
export declare const convertFormat: (id: string, source: IdCardFormatType, dest: IdCardFormatType) => string;
