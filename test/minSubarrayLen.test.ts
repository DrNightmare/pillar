// @ts-nocheck
const assert = require('assert');
const { MinSubarrayLen } = require('../src/examples/MinSubarrayLen');

const solver = new MinSubarrayLen();

const input = { nums: [2, 1, 5, 2, 3, 2], target: 7 };
assert.strictEqual(solver.run(input), 2, 'should find minimal length subarray with sum >= target');

const input2 = { nums: [2, 1, 5, 2, 8], target: 7 };
assert.strictEqual(solver.run(input2), 1, 'should handle single element meeting target');

console.log('MinSubarrayLen tests passed');
