[cell-collection](../modules.md) / dom

# dom

`cell-collection` DOM package.

## Example

```ts
import { CellCollection } from 'cell-collection';
import { HTMLCell } from 'cell-collection/dom';

const div = document.getElementById('myid');

const collection = new CellCollection();
const cell = new HTMLCell(
  div,
  {
    index: {
      row: 0,
      col: 0,
    },
    size: {
      width: 1,
      height: 1,
    }
  },
  {
    selectedSelector: 'selected',
    focusSelector: 'focused',
    pointerEventChannel: 'pointerdown',
  }
);

collection.push(cell);

console.log(collection.length); // 1
console.log(cell.element === div); // true

collection.select(0, 0);

console.log(cell.isSelected); // true
```

## Index

### Enumerations

- [HTMLCellDataAttributes](enumerations/HTMLCellDataAttributes.md)

### Classes

- [HTMLCell](classes/HTMLCell.md)

### Interfaces

- [HTMLCellOptions](interfaces/HTMLCellOptions.md)
