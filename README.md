# cell-collection

---

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

`CellCollection` object or its cells are not aimed to handle data by themselves. They are just representations of a topology. However, cells have an `userData` property that can help maintaining everything in one place. Despite that, both cells and their userData are stored by reference to the initial data. Like with a native javascript array, it's up to the user to manage their own objects.

## Basic Concepts

### Multidimensional

`CellCollection` accepts 1D to 3D array of cells. Once instantiated it will have internally flatten the array to a single dimension one, and will allow access to the cells by their `row` / `col` / `tube` numbers. It's up to the user to chose to create cells with a specific number at given position slot.

```typescript
// Cells created with tubes only.
collection.has(0, 0, 1);

// Cells created with cols only.
collection.has(0, 1);

// Cells created with rows only.
collection.has(1);

// 2D cells array.
collection.has(1, 1);

// 3D cells array.
collection.has(1, 1, 1);
```

#### 'Coordinate' system

The convention for the collection is that:

- `row`s are going from the top to the bottom (index 0 &darr; Infinity).
- `column`s are going from the left to the right (index 0 &rarr; Inifinity).
- `tube`s are going from the front to the back (index 0 &uarr; Infinity).

According to this, for example, the `right(cell: AbstractCell): AbstractCell | undefined` method of `CellCollection` will return the cell with same row and tube values, but next column according to the passed cell.

### Duplicates

Since version 1.0.4, `CellCollection` implementation allows duplicate cells. It means that cells with same row, column and tube can stand in the same collection. This was done to allow switching between two cells according to user provided actions / parameters. E.g. two cells at the same positon have different `userData` or `element`.

### Abstractions

The three implementations provided by `cell-collection` package (`Cell`, `HTMLCell` and `CellCollection`) are implementing abstractions (named `AbstractCell` and `AbstractCellCollection`) that can be used to create custom objects (e.g. a cell collection that would be based on a `Set` instead of an array). Although they are quite strict they allow to inject, for example different objects when testing specific implementations.

As an example of this, `HTMLCell` has been left as a specific implementation of `AbstractCell` instead of a subclass of `Cell`, and `element` accessor has been left as optional in `AbstractCell`.

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

### Creating basic cells from data

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

      // Just for the example: assign our data random number as `userData` of the cell.
      cell.userData = data[row][col][tube];

      // Add the cell to the collection.
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

// Get cells at given position in the range.
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

### Creating HTML cells from elements

```html
<div id="container">
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
</div>
```

```typescript
const collection = new CellCollection();
const onPointer = (cell: HTMLCell, event: PointerEvent) => {
  console.log(cell, event);
  cell.isSelected ? cell.unselect() : cell.select();
};

// Get container element.
const container = document.getElementById('container');

// Get elements that contain 'row' selector.
const rows = Array.from(container.children).filter((el: HTMLElement) =>
  el.classList.contains('row')
);

let rowIndex = 0;

// Iterate the children that contain 'row' selector.
for (const element of rows) {
  // Get elements that contain 'col' selector.
  const cols = Array.from(container.children).filter((el: HTMLElement) =>
    el.classList.contains('col')
  );

  let colIndex = 0;

  // Iterate the children that contain 'col' selector.
  for (const col of cols) {
    const cell = new HTMLCell(
      col,
      {
        index: {
          row: rowIndex,
          col: colIndex,
        },
        size: {
          width: 1,
          height: 1,
        },
      },
      // Element will be marked by adding or removing these classes when selecting/unselecting, focusing/unfocusing.
      {
        selectedSelector: 'selected',
        focusSelector: 'focused',
        // To which event the cell will be reactive to selection / focus.
        pointerEventChannel: 'pointerdown',
      }
    );

    // Add pointer listener to cell's element: clicking down will toggle the cell selected state.
    cell.addPointerListener(onPointer.bind(null, cell) as EventListener);

    collection.push(cell);
    colIndex++;
  }

  rowIndex++;
}

console.log(collection.length); // 9 = 3 * 3
```
