import { describe, test, expect } from 'vitest';
import { findMax } from '../functions/findMax';

describe('findMax function', () => {
  test('returns largest number in array', () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  test('works with negative numbers', () => {
    expect(findMax([-10, -5, -20])).toBe(-5);
  });
});
