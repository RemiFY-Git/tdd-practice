import { describe, test, expect } from "vitest";
import {add} from '../functions/add'

describe("addTwoNumbers", () => {
    test("should add two positive numbers",() => {
        expect(add(3,3)).toBe(6)
    });

    test("should add negative and positive numbers",() => {
        expect(add(-3,3)).toBe(0)
    });
})