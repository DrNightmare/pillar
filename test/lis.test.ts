// @ts-nocheck
const assert = require('assert');
const { LongestIncreasingSubsequence } = require('../src/examples/LongestIncreasingSubsequence');

const solver = new LongestIncreasingSubsequence();

const input = { nums: [10, 9, 2, 5, 3, 7, 101, 18] };
assert.strictEqual(solver.run(input), 4, 'should find length of LIS');

const input2 = { nums: [0, 1, 0, 3, 2, 3] };
assert.strictEqual(solver.run(input2), 4, 'should handle repeated numbers');

console.log('LIS tests passed');
