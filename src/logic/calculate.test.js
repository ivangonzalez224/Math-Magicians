import calculate from './calculate';

describe('Test if the number to be displayed is updated with the next character value entered', () => {
    test('Should output the number "24"', () => {
      const output = calculate({ total: '0', next: '2', operation: '+' }, '4');
      expect(output).toEqual({ total: '0', next: '24', operation: '+' });
    });
    test('Should output the number "301"', () => {
        const output = calculate({ total: '20', next: '30', operation: '*' }, '1');
        expect(output).toEqual({ total: '20', next: '301', operation: '*' });
    });
});