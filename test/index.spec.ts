import { add } from '../src';

/**
 * Describe block for add function
 * @returns {void}
 */
describe('add function', () => {
  it('should add two positive numbers', () => {
    const data = { a: 2, b: 3 };
    const expectedResult = 5;
    const result = add(data);
    expect(result).toBe(expectedResult);
  });

  it('should add two negative numbers', () => {
    const data = { a: -4, b: -2 };
    const expectedResult = -6;
    const result = add(data);
    expect(result).toBe(expectedResult);
  });

  it('should add zero to a positive number', () => {
    const data = { a: 5, b: 0 };
    const expectedResult = 5;
    const result = add(data);
    expect(result).toBe(expectedResult);
  });

  it('should add zero to a negative number', () => {
    const data = { a: -3, b: 0 };
    const expectedResult = -3;
    const result = add(data);
    expect(result).toBe(expectedResult);
  });
});
