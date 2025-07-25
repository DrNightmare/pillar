// @ts-nocheck
const assert = require('assert');
const { HouseRobber } = require('../src/examples/HouseRobber');

const solver = new HouseRobber();

const input = { houses: [1,2,3,1] };
assert.strictEqual(solver.run(input), 4, 'should find optimal robbery amount');

const input2 = { houses: [2,7,9,3,1] };
assert.strictEqual(solver.run(input2), 12, 'should handle larger list');

console.log('HouseRobber tests passed');
