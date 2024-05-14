# cell-collection

![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) ![Branches](https://img.shields.io/badge/branches-86.55%25-yellow.svg?style=flat) ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat)

A collection built on top of javascript `Array` to help with handling 2D or 3D arrays.

## Why and what

When working with HTML tables, one often needs to select one or more 'cells' and to navigate between them according to usual behaviors of mainstream softwares and operating systems. The initial motivation of `cell-collection` was to handle this navigation in [Electron](https://www.electronjs.org/) applications, like if tables were native ones. By 'table', we mean any set of data that has contiguous row, column and tube numbers/positions and belong to the same collection.

`cell-collection` reflects some of javascript's `Array` methods, while offering custom handlers to help with managing selection, multiselection, navigation, focus, etc. Even if it is fully usable in server environment, by providing a basic `Cell` implementation, it will show its full power when using it client-side, in a DOM. For this purpose, an `HTMLCell` implementation is provided (see below).

`CellCollection` object or its cells are not aimed to handle data by themselves. They are just representations of a topography. However, cells have an `userData` property that can help maintaining everything in one place. Despite that, both cells and their userData are stored by reference to the initial data. Like with a native javascript array, it's up to the user to manage their own objects.

## 'Coordinate' system

It's up to the user to chose the 'direction' of the cells, but the convention for the collection is that:

`row`s are going from the top to the bottom (index 0 &darr; Infinity).
`column`s are going from the left to the right (index 0 &rarr; Inifinity).
`tube`s are going from the front to the back (index 0 &uarr; Infinity).

## Examples

### Creating basic cells from data

```typescript
import { Cell } from 'cell-collection';

// A 3D array with 100 rows of 100 columns of 100 tubes, filled by random numbers.
const data = new Array(100).fill(
  new Array(100).fill(new Array(100).fill(Math.random()))
);

// The collection.
const collection = new Collection();

// Create a collection of cells from the array.
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
```

## Install

### with npm

```sh
npm install cell-collection
```

### with yarn

```sh
yarn add cell-collection
```

## Usage

## Cell

## HTMLCell

## CellCollection
