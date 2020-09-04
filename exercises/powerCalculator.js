function powerCalculator(base, exponent) {
	if (exponent < 0) {
		return "exponent should be >= 0";
	} else if ((exponent = 0)) {
		return;
	} else {
		return base * powerCalculator(base, exponent - 1);
	}
}
