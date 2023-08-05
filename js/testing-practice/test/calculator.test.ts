import { calculator } from "../src/calculator.util"

describe("Calculator", () => {
	test("addition", () => {
		const operation = "add";
		expect(calculator(operation, 1, 2)).toBe(3)
		expect(calculator(operation, 2, 2)).toBe(4)
		expect(calculator(operation, -1, -3)).toBe(-4)
	})

	test("subtraction", () => {
		const operation = "subtract";
		expect(calculator(operation, 1, 2)).toBe(-1)
		expect(calculator(operation, 2, 2)).toBe(0)
		expect(calculator(operation, -1, -3)).toBe(2)
	})

	test("multiplication", () => {
		const operation = "multiply";
		expect(calculator(operation, 1, 2)).toBe(2)
		expect(calculator(operation, 2, 2)).toBe(4)
		expect(calculator(operation, -1, -3)).toBe(3)
	})

	test("division", () => {
		const operation = "divide";
		expect(calculator(operation, 1, 2)).toBe(0.5)
		expect(calculator(operation, 2, 2)).toBe(1)
		expect(calculator(operation, -1, -3)).toBe(0.3333333333333333);
	})
})
