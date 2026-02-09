import { describe, test, expect } from 'vitest';
import { isPalindrome } from '../functions/isPalindrome';

describe('isPalindrome function', () => {
  test('"madam" is a palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  test('"hello" is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
});
