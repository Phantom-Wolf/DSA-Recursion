function stringSplitter(myString, stringSeparator, newArray, newString) {
	newArray = newArray || [];
	newString = newString || "";

	if (!stringSeparator && stringSeparator !== "") {
		return newArray;
	}

	if (!myString && !newString) {
		return newArray;
	}

	if (!myString && newString) {
		return newArray;
	}

	if (myString.substring(0, stringSeparator.length) !== stringSeparator) {
		newString = newString.concat(myString[0]);
	}

	if (
		myString.substring(1, stringSeparator.length + 1) === stringSeparator ||
		stringSeparator === ""
	) {
		newArray.push(newString);
		newString = "";
	}

	if (myString.substring(0, stringSeparator.length) === stringSeparator) {
		myString = myString.substring(stringSeparator.length, myString.length);
	} else {
		myString = myString.substring(1, myString.length);
	}

	return stringSplitter(myString, stringSeparator, newArray, newString);
}
