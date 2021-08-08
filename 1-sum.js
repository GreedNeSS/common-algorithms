'use strict';

const arr = [2, 4, 6];

const sum = arr => {
	if (arr.length === 1) {
		return arr.pop();
	} else {
		return arr.pop() + sum(arr);
	}
};

console.log(sum(arr));