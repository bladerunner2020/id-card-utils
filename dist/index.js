"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFormat = exports.toDecimal = exports.reverseDecimal = exports.reverseHex = exports.formHex = exports.toHex = exports.isValidFormat = exports.ID_CARD_FORMMATS = void 0;
exports.ID_CARD_FORMMATS = ['decimal', 'decimal-reverse', 'hex', 'hex-reverse'];
const isValidFormat = (type) => exports.ID_CARD_FORMMATS.includes(type);
exports.isValidFormat = isValidFormat;
const pad = (id) => {
    const s = `${id}`;
    return s.length % 2 === 0 ? s : `0${s}`;
};
const toHex = (s) => pad(BigInt(s).toString(16)).toUpperCase();
exports.toHex = toHex;
const formHex = (s) => BigInt(`0x${s}`).toString(10);
exports.formHex = formHex;
const reverseHex = (id) => {
    const uint8 = Uint8Array.from(Buffer.from(pad(id), 'hex'));
    uint8.reverse();
    return Buffer.from(uint8).toString('hex').toUpperCase();
};
exports.reverseHex = reverseHex;
const reverseDecimal = (id) => {
    if (id === '')
        return id;
    const hex = (0, exports.toHex)(id);
    const revHex = (0, exports.reverseHex)(hex);
    const revDec = (0, exports.formHex)(revHex);
    return pad(revDec);
};
exports.reverseDecimal = reverseDecimal;
const toDecimal = (id, sourceType) => {
    switch (sourceType) {
        case 'decimal': return id;
        case 'hex': return pad((0, exports.formHex)(id));
        case 'hex-reverse': return pad((0, exports.formHex)((0, exports.reverseHex)(id)));
        case 'decimal-reverse': return (0, exports.reverseDecimal)(id);
        default:
            throw new Error('Invalid type');
    }
};
exports.toDecimal = toDecimal;
const convertFormat = (id, source, dest) => {
    if (source === dest)
        return id;
    const d = (0, exports.toDecimal)(id, source);
    switch (dest) {
        case 'decimal': return d;
        case 'hex': return pad((0, exports.toHex)(d));
        case 'hex-reverse': return pad((0, exports.formHex)((0, exports.reverseHex)((0, exports.toHex)(d))));
        case 'decimal-reverse': return (0, exports.reverseDecimal)(d);
        default:
            throw new Error('Invalid type');
    }
};
exports.convertFormat = convertFormat;
//# sourceMappingURL=index.js.map