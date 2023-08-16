import operate from './operate';

describe('Do operations +, -, *, ÷, and %', () => {
  test('sum 90 + 100 to equal 190', () => {
    expect(operate(90, 100, '+')).toBe('190');
  });
  test('substract 9 - 8 to equal 1', () => {
    expect(operate(9, 8, '-')).toBe('1');
  });
  test('multiply 8 * 9 to equal 72', () => {
    expect(operate(8, 9, 'x')).toBe('72');
  });
  test('divide 30 ÷ 10 to equal 3', () => {
    expect(operate(3, 1, '÷')).toBe('3');
  });
  test('module 10 % 4 to equal 2', () => {
    expect(operate(10, 4, '%')).toBe('2');
  });
});
