import { toDecimal } from '../src';

describe('toDecimal', () => {
  it('source - decimal', () => {
    expect(toDecimal('01', 'decimal')).toBe('01');
  });

  it('source - reverse decimal', () => {
    expect(toDecimal('0732224569767760', 'decimal-reverse')).toBe('22649253712402690');
  });

  it('source - hex', () => {
    expect(toDecimal('50776051F49902', 'hex')).toBe('22649253712402690');
    expect(toDecimal('806E0ECA7C5604', 'hex')).toBe('36149806824707588');
  });

  it('source - reverse hex', () => {
    expect(toDecimal('0299F451607750', 'hex-reverse')).toBe('22649253712402690');
    expect(toDecimal('04567CCA0E6E80', 'hex-reverse')).toBe('36149806824707588');
    expect(toDecimal('24E07C06', 'hex-reverse')).toBe('108847140');
    expect(toDecimal('E9F22704', 'hex-reverse')).toBe('69726953');
  });
});
