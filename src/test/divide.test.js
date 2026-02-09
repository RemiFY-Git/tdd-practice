import { describe, test, expect } from 'vitest';
import { divide } from '../functions/divide';

describe('divideTwoNumbers', () => {
  test('divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide a number by 0', () => {
    expect(divide(10, 0)).toBeNull();
  });
});
