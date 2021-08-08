'use strict';

const list = {
	next: {
		next: {
			next: {
				next: {}
			}
		}
	}
};

const counter = (list, count = 0) => {
	if (list.next) {
		return counter(list.next, ++count);
	} else {
		return ++count;
	}
};

console.log(counter(list));