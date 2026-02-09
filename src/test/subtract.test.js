import { describe, test, expect } from 'vitest';
import { subtract } from '../functions/subtract';

describe('subtractTwoNumbers', () => {
  test('should subtracts two numbers', () => {
    expect(subtract(4, 2)).toBe(2);
  });

  test('should subtracts two numbers', () => {
    expect(subtract(2, 4)).toBe(-2);
  });
});
