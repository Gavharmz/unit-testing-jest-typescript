import { validateDate } from './validateDate';

describe('Тестирование функции validateDate', () => {

  it('должна пропускать корректную будущую дату в формате ДД.ММ.ГГГГ', () => {
    const result = validateDate('25.12.2030');
    expect(result.isValid).toBe(true);
  });

  it('не должна пропускать спецсимволы', () => {
    const result = validateDate('12/10/2025!');
    expect(result.isValid).toBe(false);
  });

  it('не должна пропускать буквенные значения', () => {
    const result = validateDate('DD.MM.2025');
    expect(result.isValid).toBe(false);
  });

  it('должна возвращать ошибку и isValid: false, если дата раньше текущей', () => {
    const result = validateDate('01.01.2000');
    expect(result.isValid).toBe(false);
    expect(result.message).toBeDefined();
  });
});