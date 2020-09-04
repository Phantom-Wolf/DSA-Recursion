

function factorial(n) {
	if (n === 0) {
		console.log("the recursion has reached " + 0);
		return 1;
	} else {
		console.log("inside the recursion n = " + n);

		return factorial(n - 1) * n;
	}
}

console.log(factorial(5))

