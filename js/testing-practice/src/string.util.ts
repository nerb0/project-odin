export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str: string): string {
	return str.split("").reverse().join("");
}

export function caesarCipher(str: string, offset: number = 13) {
	if (offset < 0) offset = offset % 26;
	else if (offset > 26) offset = offset % 26;

	return str.split("").map((char) => {
		let charCode = char.charCodeAt(0);
		if (charCode >= 65 && charCode <= 90) {
			const char = charCode + offset;
			charCode = char > 90 ? char - 26 : char;
		} else if (charCode >= 97 && charCode <= 122) {
			const char = charCode + offset;
			charCode = char > 122 ? char - 26 : char;
		}
		return String.fromCharCode(charCode);
	}).join("");
}
