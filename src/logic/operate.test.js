import operate from './operate';

describe('Do operations +, -, x, ÷, and %', () => {
  test('sum 90 + 100 should be equal to 190', () => {
    expect(operate(90, 100, '+')).toBe('190');
  });
  test('substract 9 - 8 should be equal to 1', () => {
    expect(operate(9, 8, '-')).toBe('1');
  });
  test('multiply 8 * 9 should be equal to 72', () => {
    expect(operate(8, 9, 'x')).toBe('72');
  });
  test('divide 30 ÷ 10 should be equal to 3', () => {
    expect(operate(3, 1, '÷')).toBe('3');
  });
  test('module 10 % 4 should be equal to 2', () => {
    expect(operate(10, 4, '%')).toBe('2');
  });
  test('the return should be "Can\'t divide by 0."  for the division of 20 by 0', () => {
    expect(operate('20', '0', '÷')).toEqual('Can\'t divide by 0.');
   });
   
   test('the return should be "Can\'t find modulo as can\'t divide by 0." for the modulo of 5 and 0', () => {
      expect(operate('5', '0', '%')).toEqual('Can\'t find modulo as can\'t divide by 0.');
   });
   
   test('the output should throw error for unknown operation', () => {
    expect(() => operate('15', '3', '@')).toThrow('Unknown operation \'@\'');
   });
});
