'use strict';

const personIsSeller = person => {
	if (person.profession === 'seller') {
		return true;
	} else {
		return false;
	}
};

const graph = new Map();
graph.set('you', ['alice', 'bob', 'claire']);
graph.set('bob', ['anuj', 'peggy']);
graph.set('alice', ['peggy']);
graph.set('claire', ['thom', 'jonny']);
graph.set('anuj', []);
graph.set('peggy', []);
graph.set('thom', []);
graph.set('jonny', []);

const thom = graph.get('thom');
thom.profession = 'seller';

const search = name => {
	const deque = [];
	deque.push(...graph.get(name));
	const searched = [];
	while (deque.length) {
		const person = deque.shift();
		if (searched.indexOf(person) === -1) {
			console.log(person);
			if (personIsSeller(graph.get(person))) {
				console.log(`${person} is seller`);
				return true;
			} else {
				searched.push(person);
				deque.push(...graph.get(person));
			}
		}
	}
	return false;
};

search('you');