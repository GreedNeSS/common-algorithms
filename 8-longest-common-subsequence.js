'use strict';

const lcs = (str1, str2) => {
	if (!str1 || !str2) {
		return {
			lcs: 0,
			offset: 0,
			sequence: ''
		};
	}

	let lcs = 0;
	let lastSubIndex = 0;
	let len1 = str1.length;
	let len2 = str2.length;

	const table = [];
	for (let row = 0; row <= len1; row++) {
		table[row] = [];
		for (let col = 0; col <= len2; col++) {
			table[row][col] = 0;
		}
	}

	table.forEach((row, i) => {
		if (i < len1) {
			table[i].forEach((elem, j) => {
				if (j < len2) {
					if (str1[i] === str2[j]) {
						if (table[i][j] === 0) {
							table[i + 1][j + 1] = 1;
						} else {
							table[i + 1][j + 1] = table[i][j] + 1;
						}

						if (table[i + 1][j + 1] > lcs) {
							lcs = table[i + 1][j + 1];
							lastSubIndex = i;
						}
					} else {
						table[i + 1][j + 1] = 0;
					}
				}
			});
		}
	});

	return {
		lcs,
		offset: lastSubIndex - lcs + 1,
		sequence: str1.slice(lastSubIndex - lcs + 1, lastSubIndex + 1)
	};
};

console.log(lcs("hish", "fish")); // { lcs: 3, offset: 1, sequence: 'ish' }
console.log(lcs("vista", "hish")); // { lcs: 2, offset: 1, sequence: 'is' }
console.log(lcs("google", "abcdefgooglehijklm")); // { lcs: 6, offset: 0, sequence: 'google' }
console.log(lcs("0", 0)); // { lcs: 0, offset: 0, sequence: '' }