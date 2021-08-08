'use strict';

const statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {
	kone: new Set(["id", "nv", "ut"]),
	ktwo: new Set(["wa", "id", "mt"]),
	kthree: new Set(["or", "nv", "ca"]),
	kfour: new Set(["nv", "ut"]),
	kfive: new Set(["ca", "az"])
};

const greedy = (items, sets) => {
	const finalStations = new Set();

	while (items.size) {
		let bestSet = null;
		let setOfIntersectingItems = new Set();
		for (const set in sets) {
			const intersectingItems = new Set([...items].filter(x => sets[set].has(x)));
			if (intersectingItems.size > setOfIntersectingItems.size) {
				bestSet = set;
				setOfIntersectingItems = intersectingItems;
			}
		}

		finalStations.add(bestSet);
		items = new Set([...items].filter(x => !sets[bestSet].has(x)));
	}

	return finalStations;
};

console.dir(greedy(statesNeeded, stations));