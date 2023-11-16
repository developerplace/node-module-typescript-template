/**
 * Interface for add function
 */
interface IAdd {
  a: number;
  b: number;
}

/**
 * Add two numbers
 * @param {IAdd} data - Two numbers to add
 * @returns {number} Sum of two numbers
 */
export const add = (data: IAdd) => data.a + data.b;
