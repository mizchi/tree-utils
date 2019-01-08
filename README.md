# @mizchi/tree-utils

Non-destructive tree utils.

```
yarn add @mizchi/test-utils
```

## Example

```ts
import { moveNode, Node } from "@mizchi/tree-utils";

const sampleTree: Node<number> = {
  id: "root",
  data: 1,
  children: [
    {
      id: "c0",
      data: 2,
      children: [
        {
          id: "c0-0",
          data: 3,
          children: []
        }
      ]
    },
    {
      id: "c1",
      data: 4,
      children: [
        {
          id: "c1-0",
          data: 5,
          children: []
        },
        {
          id: "c1-1",
          data: 6,
          children: []
        }
      ]
    }
  ]
};

import assert from "assert";

// move c0-0 under c1 with index 1
const r0 = moveNode(sampleTree, "c0-0", "c1", 1);
assert.deepEqual(r0.children[0].children.length, 0);
assert.deepEqual(r0.children[1].children.length, 3);
assert.deepEqual(r0.children[1].children.map(i => i.id), [
  "c1-0",
  "c0-0",
  "c1-1"
]);

// move c1-0 under c0 with index 0
const r1 = moveNode(sampleTree, "c1-0", "c0", 0);
assert.deepEqual(r1.children[0].children.map(i => i.id), ["c1-0", "c0-0"]);
assert.deepEqual(r1.children[1].children.map(i => i.id), ["c1-1"]);
```

See detail `index.d.ts` and `__tests__/index.test.ts`

## LICENSE

MIT
