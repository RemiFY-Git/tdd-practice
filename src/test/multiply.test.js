import { describe, test, expect } from 'vitest';
import { multiply } from '../functions/multiply';

describe('multiplyTwoNumbers', () => {
  test(' should multiply two positive numbers', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test(' should multiply negative and positive numbers', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });
});
