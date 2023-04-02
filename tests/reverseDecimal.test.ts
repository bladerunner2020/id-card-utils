import { reverseDecimal } from '../src';

describe('reverseHex', () => {
  it('Empty', () => {
    expect(reverseDecimal('')).toBe('');
  });

  it('Real IDs', () => {
    expect(reverseDecimal('022649253712402690')).toBe('0732224569767760');
  });
});
