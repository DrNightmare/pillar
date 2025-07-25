// @ts-nocheck
const assert = require('assert');
const { PairSumExists } = require('../examples/PairSumExists');

const solver = new PairSumExists();

const input = { nums: [1, 2, 3, 4, 6], target: 6 };
assert.strictEqual(solver.run(input), true, 'should find a pair that sums to target');

const input2 = { nums: [1, 2, 3, 9], target: 8 };
assert.strictEqual(solver.run(input2), false, 'should return false when no pair exists');

console.log('All tests passed');
