import { reverseHex } from '../src';

describe('reverseHex', () => {
  it('Empty', () => {
    expect(reverseHex('')).toBe('');
  });

  it('Reverse hex', () => {
    expect(reverseHex('01')).toBe('01');
    expect(reverseHex('0102')).toBe('0201');
    expect(reverseHex('010203')).toBe('030201');
    expect(reverseHex('01020304')).toBe('04030201');
  });

  it('Missing leading zero', () => {
    expect(reverseHex('1')).toBe('01');
    expect(reverseHex('102')).toBe('0201');
    expect(reverseHex('10203')).toBe('030201');
    expect(reverseHex('1020304')).toBe('04030201');
  });

  it('Real IDs', () => {
    expect(reverseHex('50776051F49902')).toBe('0299F451607750');
    expect(reverseHex('806E0ECA7C5604')).toBe('04567CCA0E6E80');
  });
});
