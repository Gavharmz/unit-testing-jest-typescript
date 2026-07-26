import { describe, it, expect } from '@jest/globals';
import { validateCityName } from './validateCity';

describe('Тестирование функции validateCityName', () => {

  it('должна возвращать ошибку и isValid: false, если есть символы экранирования', () => {
    const result = validateCityName('<script>');
    expect(result.isValid).toBe(false);
    expect(result.message).toBeDefined();
  });

  it('должна пропускать название с восклицательным знаком или дефисами (например, Saint-Louis-du-Ha! Ha!)', () => {
    const result = validateCityName('Saint-Louis-du-Ha! Ha!');
    expect(result.isValid).toBe(true);
  });

  it('должна пропускать название со спецсимволами (например, Ağrı)', () => {
    const result = validateCityName('Ağrı');
    expect(result.isValid).toBe(true);
  });

  it('должна пропускать название города из одной буквы', () => {
    const result = validateCityName('A');
    expect(result.isValid).toBe(true);
  });
});