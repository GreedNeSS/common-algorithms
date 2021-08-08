'use strict';

const initializeMatrix = (rows, cols) => {
	let matrix = [];
	for (let i = 0; i < rows.length; i++) {
		matrix.push(Array(cols.length).fill(0));
	}
	return matrix;
};

const diff = (firstWord, secondWord) => {
	let arr1 = firstWord.split("");
	let arr2 = secondWord.split("");
	let matrix = initializeMatrix(arr1, arr2);
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				if (i > 0 && j > 0) {
					matrix[i][j] = matrix[i - 1][j - 1] + 1;
				} else {
					matrix[i][j] = 1;
				}
			} else {
				if (i > 0 && j > 0) {
					matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
				} else {
					matrix[i][j] = 0;
				}
			}
		}
	}

	console.log(matrix);
	return matrix[arr1.length - 1][arr2.length - 1];
};

console.log(diff("gpogl", "googl"));