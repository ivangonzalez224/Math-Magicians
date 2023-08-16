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

describe('Test if the objet restarts to display 0 when entering AC value', () => {
  test('Should restart the object with null values', () => {
    const output = calculate({ total: '100', next: '25', operation: '*' }, 'AC');
    expect(output).toEqual({ total: null, next: null, operation: null });
  });
  test('Should restart the object with null values', () => {
    const output = calculate({ total: '1', next: '5', operation: '÷' }, 'AC');
    expect(output).toEqual({ total: null, next: null, operation: null });
  });
});

describe('Test if the objet change when calculating an operation +, -, x, ÷, or +/-', () => {
  test('Should update the object with total = 26', () => {
    const output = calculate({ total: '22', next: '4', operation: '+' }, '-');
    expect(output).toEqual({ total: '26', next: null, operation: '-' });
  });
  test('Should update the object with total = 20', () => {
    const output = calculate({ total: '30', next: '10', operation: '-' }, '+');
    expect(output).toEqual({ total: '20', next: null, operation: '+' });
  });
  test('Should update the object with total = 1500', () => {
    const output = calculate({ total: '15', next: '100', operation: 'x' }, 'x');
    expect(output).toEqual({ total: '1500', next: null, operation: 'x' });
  });
  test('Should update the object with total = 20', () => {
    const output = calculate({ total: '200', next: '10', operation: '÷' }, 'x');
    expect(output).toEqual({ total: '20', next: null, operation: 'x' });
  });
  it('should update the object with total equals to the negation of the total', () => {
    const output = calculate({ total: '18', next: null, operation: '-' }, '+/-');
    expect(output).toEqual({ total: '-18', next: null, operation: '-' });
  });
});
