[cell-collection](../modules.md) / Core

# Core

`cell-collection` core package.

## Example

```ts
import { CellCollection, Cell } from 'cell-collection';

const collection = new CellCollection();
const cell = new Cell({
  index: {
    row: 0,
    col: 0,
  },
  size: {
    width: 1,
    height: 1,
  }
});

collection.push(cell);

console.log(collection.length); // 1
console.log(collection.has(0, 0)); // true
```

## Index

### Enumerations

- [CellCollectionCacheKey](enumerations/CellCollectionCacheKey.md)

### Classes

- [AbstractCell](classes/AbstractCell.md)
- [AbstractCellCollection](classes/AbstractCellCollection.md)
- [Cell](classes/Cell.md)
- [CellCollection](classes/CellCollection.md)

### Interfaces

- [CellBounds](interfaces/CellBounds.md)
- [CellIndex](interfaces/CellIndex.md)
- [CellRange](interfaces/CellRange.md)
- [CellSize](interfaces/CellSize.md)

### Type Aliases

- [CellCollectionCallback](type-aliases/CellCollectionCallback.md)
