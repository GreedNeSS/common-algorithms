'use strict';

const list = {
	val: 2,
	next: {
		val: 5,
		next: {
			val: 12,
			next: {
				val: 4,
				next: {}
			}
		}
	}
};

const counter = (list, max = 0) => {
	if (list.next) {
		return counter(list.next, max > list.val
			? max : list.val
		);
	} else {
		return max;
	}
};

console.log(counter(list));