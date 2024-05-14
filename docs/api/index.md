# cell-collection

<div style="display: flex">
<img src="https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat" style="height:100%; margin-right: 0.5rem;"/> 
<img src="https://img.shields.io/badge/branches-86.55%25-yellow.svg?style=flat" style="height:100%; margin-right: 0.5rem;"/> 
<img src="https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat" style="height:100%; margin-right: 0.5rem;"/> 
<img src="https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat" style="height:100%; margin-right: 0.5rem;"/> 
</div>
<br />

A collection built on top of javascript `Array` to help with handling 1D to 3D arrays.

## Why and what

When working with HTML tables, one often needs to select one or more 'cells' and to navigate between them according to usual behaviors of mainstream softwares and operating systems. The initial motivation of `cell-collection` was to handle this navigation in [Electron](https://www.electronjs.org/) applications, like if tables were native ones. By 'table', we mean any set of data that has contiguous row, column and tube numbers/positions and belong to the same collection.

`cell-collection` **reflects most of javascript's** `Array` **methods**, while offering custom handlers to help with managing selection, multiselection, navigation, focus, etc. Even if it is fully usable in server environment, by providing a basic `Cell` implementation, it will demonstrate its full power when using it client-side, in a DOM. For this purpose, an `HTMLCell` implementation is provided (see below).

`CellCollection` object or its cells are not aimed to handle data by themselves. They are just representations of a topography. However, cells have an `userData` property that can help maintaining everything in one place. Despite that, both cells and their userData are stored by reference to the initial data. Like with a native javascript array, it's up to the user to manage their own objects.

## 'Coordinate' system

It's up to the user to chose the 'direction' of the cells, but the convention for the collection is that:

- `row`s are going from the top to the bottom (index 0 &darr; Infinity).
- `column`s are going from the left to the right (index 0 &rarr; Inifinity).
- `tube`s are going from the front to the back (index 0 &uarr; Infinity).

## Install

### with npm

```sh
npm install cell-collection
```

### with yarn

```sh
yarn add cell-collection
```

## Examples

### Basic cells from data

```typescript
import { Cell } from 'cell-collection';

// A 3D array with 100 rows of 100 columns of 100 tubes, filled with random numbers.
const data = new Array(100).fill(
  new Array(100).fill(new Array(100).fill(Math.random()))
);

// The collection.
const collection = new Collection();

// Create cells from the array and push them in the collection.
for (let row = 0; row < 100; row++) {
  for (let col = 0; col < 100; col++) {
    for (let tube = 0; tube < 100; tube++) {
      const cell = new Cell({
        index: {
          row,
          col,
          tube,
        },
        size: {
          width: 1,
          height: 1,
          depth: 1,
        },
      });
      cell.userData = data[row][col][tube];
      collection.push(cell);
    }
  }
}

// Get a range of cells of 3 * 3 * 3 beginning at [2, 4, 3].
const rangeA: CellCollection = collection.in({
  index: {
    row: 2,
    col: 4,
    tube: 3,
  },
  size: {
    width: 3,
    height: 3,
    depth: 3,
  },
});

// Get cells iat given position n the range.
const cellA: Cell | undefined = rangeA.at(2, 4, 3);
const cellB: Cell | undefined = rangeA.at(3, 4, 4);

// Get a new range by passing the cells.
const rangeB: CellCollection = rangeA.in(cellA, cellB);

// Get the intersecting cells as a new collection.
console.log(rangeB.intersection(rangeA));

// Get the cell at the next row from cellA.
const nextRow: Cell | undefined = collection.bottom(cellA);

// Get the cell at the next column from cellA.
const nextCol: Cell | undefined = collection.right(cellA);

// Get the cell at the next tube from cellA.
const nextCol: Cell | undefined = collection.back(cellA);
```

## CellCollection

## Cell

## HTMLCell
