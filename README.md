# ds-patterns

This is an experimental TypeScript project exploring reusable data structure and algorithm patterns. A few patterns such as the two pointer, sliding window and dynamic programming approaches have been added along with example problem solutions.

## Build and test

Install dependencies and compile the library:

```bash
npm install
npm run build
```

Run the provided tests:

```bash
npm test
```

## Example usage

```ts
import { PairSumExists } from 'ds-patterns';

const solver = new PairSumExists();
console.log(solver.run({ nums: [1, 2, 3, 4, 6], target: 6 })); // true
```

This project currently has no declared license.
