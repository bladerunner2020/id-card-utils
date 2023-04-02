import { convertFormat } from '../src';

describe('convertFormat', () => {
  it('Hex to decimal', () => {
    expect(convertFormat('50776051F49902', 'hex', 'decimal')).toBe('022649253712402690');
    expect(convertFormat('806E0ECA7C5604', 'hex', 'decimal')).toBe('036149806824707588');
  });

  it('Reverse hex to decimal', () => {
    expect(convertFormat('0299F451607750', 'hex-reverse', 'decimal')).toBe('022649253712402690');
    expect(convertFormat('04567CCA0E6E80', 'hex-reverse', 'decimal')).toBe('036149806824707588');
  });

  it('Reverse decimal to decimal', () => {
    expect(convertFormat('0732224569767760', 'decimal-reverse', 'decimal')).toBe('022649253712402690');
  });

  it('Decimal to hex', () => {
    expect(convertFormat('022649253712402690', 'decimal', 'hex')).toBe('50776051F49902');
    expect(convertFormat('036149806824707588', 'decimal', 'hex')).toBe('806E0ECA7C5604');
  });

  it('Reverse decimal to hex', () => {
    expect(convertFormat('0732224569767760', 'decimal-reverse', 'hex')).toBe('50776051F49902');
  });

  it('Reverse hex to hex', () => {
    expect(convertFormat('0299F451607750', 'hex-reverse', 'hex')).toBe('50776051F49902');
    expect(convertFormat('04567CCA0E6E80', 'hex-reverse', 'hex')).toBe('806E0ECA7C5604');
  });

  it('Decimal to reverse-decimal', () => {
    expect(convertFormat('022649253712402690', 'decimal', 'decimal-reverse')).toBe('0732224569767760');
  });

  it('Hex to reverse-decimal', () => {
    expect(convertFormat('50776051F49902', 'hex', 'decimal-reverse')).toBe('0732224569767760');
  });

  it('Reverse hex to reverse-decimal', () => {
    expect(convertFormat('0299F451607750', 'hex-reverse', 'decimal-reverse')).toBe('0732224569767760');
  });
});
