function nTriangle(n, t) {
	let t = !t ? 0 : t;

	if (n === 0) {
		return "T =" + t;
	}

	t = t + n;
	n = n - 1;

	nTriangle(n, t);
}
