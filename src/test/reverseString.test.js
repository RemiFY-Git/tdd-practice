import { describe, test, expect } from 'vitest';
import { reverseString } from '../functions/reverseString';

describe('reverseString function', () => {
  test('reverses "hello" to "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses "Ray" to "yaR"', () => {
    expect(reverseString('Ray')).toBe('yaR');
  });
});
