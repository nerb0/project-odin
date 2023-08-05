type Operation = 'add' | 'subtract' | 'multiply' | 'divide';
export function calculator(operation: Operation, a: number, b: number): number {
	switch (operation) {
		case 'add':
			return a + b;
		case 'subtract':
			return a - b;
		case 'multiply':
			return a * b;
		case 'divide':
			return a / b;
	}
}
