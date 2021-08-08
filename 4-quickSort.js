'use strict';

const qsort = arr => {
	if (arr.length < 2) return arr;
	const pivot = arr.pop();
	const less = [];
	const greater = [];
	for (const i of arr) {
		i > pivot ? greater.push(i) : less.push(i);
	}
	return [...qsort(less), pivot, ...qsort(greater)];
};

console.log(qsort([10, 5, 2, 3, 14, 3, 1, 3, 34, 21]));