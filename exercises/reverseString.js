function reverseString(string, newString) {
	newString = !newString ? "" : newString;

	if (string.length === 0) {
		return newString;
	}

	newString = newString + string[string.length - 1];

	string = string.substring(0, string.length - 1);

	reverseString(string, newString)
}
