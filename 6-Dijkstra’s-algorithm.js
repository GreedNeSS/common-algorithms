'use strict';

const graph = {
	start: {
		a: 6,
		b: 2,
	},
	a: {
		fin: 1
	},
	b: {
		a: 3,
		fin: 5
	},
	fin: {},
};

const dijkstrasAlg = (graph, startingNodeName) => {
	const costs = {};
	const parents = {};
	Object.keys(graph[startingNodeName]).map(
		n => {
			costs[n] = graph[startingNodeName][n];
			parents[n] = startingNodeName;
		});
	Object.keys(graph).map(node => {
		if (node !== startingNodeName &&
			!Object.keys(costs).includes(node)) costs[node] = Infinity;
	});
	const processed = [];

	const findLowestCostNode = costs => {
		let lowestCost = Infinity;
		let lowestCostNode = null;
		for (const node in costs) {
			const cost = costs[node];
			if (cost < lowestCost && !processed.includes(node)) {
				lowestCost = cost;
				lowestCostNode = node;
			}
		}
		return lowestCostNode;
	}

	let node = findLowestCostNode(costs);

	while (node) {
		const cost = costs[node];
		const neighbors = graph[node];
		Object.keys(neighbors).map(
			n => {
				const newCost = cost + neighbors[n];
				if (costs[n] > newCost) {
					costs[n] = newCost;
					parents[n] = node;
				}
			}
		);
		processed.push(node);
		node = findLowestCostNode(costs);
	}

	return { costs, parents };
};

console.dir(dijkstrasAlg(graph, 'start'));