import { caesarCipher, capitalize, reverse } from "../src/string.util";

describe("String Utilities", () => {
	test("capitalize", () => {
		expect(capitalize("hello")).toBe("Hello");
		expect(capitalize("hello world")).toBe("Hello world");
		expect(capitalize("h")).toBe("H");
		expect(capitalize("")).toBe("");
	});

	test("reverse", () => {
		expect(reverse("hello")).toBe("olleh");
		expect(reverse("hello world")).toBe("dlrow olleh");
		expect(reverse("h")).toBe("h");
		expect(reverse("")).toBe("");
	});

	test("caesar cipher", () => {
		expect(caesarCipher("hello", 1)).toBe("ifmmp");
		expect(caesarCipher("hello world", 1)).toBe("ifmmp xpsme");
		expect(caesarCipher("hell?", 28)).toBe("jgnn?");
		expect(caesarCipher("hell? world", 28)).toBe("jgnn? yqtnf");
		expect(caesarCipher("hell?", -2)).toBe("fcjj?");
		expect(caesarCipher("hell? world", -2)).toBe("fcjj? umpjb");
		expect(caesarCipher("hello")).toBe("uryyb");
		expect(caesarCipher("HELLO")).toBe("URYYB");
	});

})
