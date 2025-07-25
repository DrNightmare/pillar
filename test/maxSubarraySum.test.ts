// @ts-nocheck
const assert = require('assert');
const { MaxSubarraySum } = require('../src/examples/MaxSubarraySum');

const solver = new MaxSubarraySum();

const input = { nums: [2, 3, 4, 1, 5], k: 2 };
assert.strictEqual(solver.run(input), 7, 'should find max sum of subarray of size k');

const input2 = { nums: [1, -1, 5, 2, 3], k: 3 };
assert.strictEqual(solver.run(input2), 10, 'should work with negative numbers');

console.log('MaxSubarraySum tests passed');
