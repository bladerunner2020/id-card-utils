import { reverseDecimal } from '../src';

describe('reverseHex', () => {
  it('Empty', () => {
    expect(reverseDecimal('')).toBe('');
  });

  it('Real IDs', () => {
    expect(reverseDecimal('022649253712402690')).toBe('732224569767760');
    expect(reverseDecimal('0732224569767760')).toBe('22649253712402690');

    expect(reverseDecimal('036108581711349252')).toBe('1273506433091712');
  });
});
