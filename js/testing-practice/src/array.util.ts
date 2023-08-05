function getAverage(numbers: number[]): number {
	if (!numbers.length) return NaN
	return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length
}

function getMin(numbers: number[]): number {
	if (!numbers.length) return NaN
	return numbers.reduce((acc, cur) => Math.min(acc, cur), Infinity)
}

function getMax(numbers: number[]): number {
	if (!numbers.length) return NaN
	return numbers.reduce((acc, cur) => Math.max(acc, cur), -Infinity)
}

export function analyzeArray(numbers: number[]) {
	return {
		average: getAverage(numbers),
		min: getMin(numbers),
		max: getMax(numbers),
		length: numbers.length
	}
}
