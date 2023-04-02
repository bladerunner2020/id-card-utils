export type IdFormatType = 'decimal' | 'decimal-reverse' | 'hex' | 'hex-reverse';

const pad = (id: number | string): string => {
  const s = `${id}`;
  return s.length % 2 === 0 ? s : `0${s}`;
};

export const toHex = (s: string): string => pad(BigInt(s).toString(16)).toUpperCase();
export const formHex = (s: string): string => BigInt(`0x${s}`).toString(10);

export const reverseHex = (id: string): string => {
  const uint8 = Uint8Array.from(Buffer.from(pad(id), 'hex'));
  uint8.reverse();
  return Buffer.from(uint8).toString('hex').toUpperCase();
};

export const reverseDecimal = (id: string): string => {
  if (id === '') return id;
  const hex = toHex(id);
  const revHex = reverseHex(hex);
  const revDec = formHex(revHex);
  return pad(revDec);
};

export const toDecimal = (id: string, sourceType: IdFormatType): string => {
  switch (sourceType) {
    case 'decimal': return id;
    case 'hex': return pad(formHex(id));
    case 'hex-reverse': return pad(formHex(reverseHex(id)));
    case 'decimal-reverse': return reverseDecimal(id);

    default:
      throw new Error('Invalid type');
  }
};

export const convertFormat = (id: string, source: IdFormatType, dest: IdFormatType): string => {
  if (source === dest) return id;

  const d = toDecimal(id, source);

  switch (dest) {
    case 'decimal': return d;
    case 'hex': return pad(toHex(d));
    case 'hex-reverse': return pad(formHex(reverseHex(toHex(d))));
    case 'decimal-reverse': return reverseDecimal(d);

    default:
      throw new Error('Invalid type');
  }
};
