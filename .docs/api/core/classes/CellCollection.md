[cell-collection](../../modules.md) / [core](../index.md) / CellCollection

# Class: CellCollection

An abstract class that defines a model for implementing `CellCollection`.

## Implements

- [`AbstractCellCollection`](AbstractCellCollection.md)

## Indexable

 \[`index`: `number`\]: [`AbstractCell`](AbstractCell.md)

## Constructors

### new CellCollection()

> **new CellCollection**(`array`): [`CellCollection`](CellCollection.md)

#### Parameters

• **array**: [`AbstractCell`](AbstractCell.md)[] \| [`AbstractCell`](AbstractCell.md)[][] \| [`AbstractCell`](AbstractCell.md)[][][]= `[]`

#### Returns

[`CellCollection`](CellCollection.md)

#### Source

[core/cell-collection.module.ts:53](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L53)

## Properties

### \_cache

> `private` **\_cache**: `Record`\<`string`, `any`\>

A cache to bypass some operations on the collection.

#### Source

[core/cell-collection.module.ts:47](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L47)

***

### \_cells

> `private` **\_cells**: [`AbstractCell`](AbstractCell.md)[] = `[]`

A 1D `Array` of `AbstractCell` belonging to this `CellCollection`.

#### Source

[core/cell-collection.module.ts:42](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L42)

## Accessors

### bounds

> `get` **bounds**(): [`CellBounds`](../interfaces/CellBounds.md)

Bounds with the first cell position and the last cell position.

#### Returns

[`CellBounds`](../interfaces/CellBounds.md)

#### Source

[core/cell-collection.module.ts:819](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L819)

***

### elements

> `get` **elements**(): (`undefined` \| `Element`)[]

If cell collection is applying to DOM, the elements of this collection's cells.

#### Returns

(`undefined` \| `Element`)[]

#### Source

[core/cell-collection.module.ts:899](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L899)

***

### firstCell

> `get` **firstCell**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

The first cell of the collection at 0 for row, column and tube.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

#### Source

[core/cell-collection.module.ts:749](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L749)

***

### firstColumnNumber

> `get` **firstColumnNumber**(): `number`

Number of the first column.

#### Returns

`number`

#### Source

[core/cell-collection.module.ts:769](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L769)

***

### firstRowNumber

> `get` **firstRowNumber**(): `number`

Number of the first row.

#### Returns

`number`

#### Source

[core/cell-collection.module.ts:759](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L759)

***

### firstTubeNumber

> `get` **firstTubeNumber**(): `number`

Number of the first tube.

#### Returns

`number`

#### Source

[core/cell-collection.module.ts:779](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L779)

***

### focused

> `get` **focused**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

#### Source

[core/cell-collection.module.ts:895](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L895)

***

### lastCell

> `get` **lastCell**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

The last cell of the collection, at the end position for row, column and tube.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

#### Source

[core/cell-collection.module.ts:754](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L754)

***

### lastColumnNumber

> `get` **lastColumnNumber**(): `number`

Number of the last column.

#### Returns

`number`

#### Source

[core/cell-collection.module.ts:799](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L799)

***

### lastRowNumber

> `get` **lastRowNumber**(): `number`

Number of the last row.

#### Returns

`number`

#### Source

[core/cell-collection.module.ts:789](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L789)

***

### lastTubeNumber

> `get` **lastTubeNumber**(): `number`

Number of the last tube.

#### Returns

`number`

#### Source

[core/cell-collection.module.ts:809](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L809)

***

### length

> `get` **length**(): `number`

The number of cells in the collection.

> `set` **length**(`length`): `void`

The number of cells in the collection.

#### Parameters

• **length**: `number`

#### Returns

`number`

#### Source

[core/cell-collection.module.ts:745](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L745)

***

### selected

> `get` **selected**(): [`CellCollection`](CellCollection.md)

A new cells collection from the selected cells of this collection.

#### Example

```ts
// ...
const cell = collection.select(0, 0, 0);
console.log(collection.selected.length) // 1
```

#### Returns

[`CellCollection`](CellCollection.md)

#### Source

[core/cell-collection.module.ts:891](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L891)

***

### selectionLands

> `get` **selectionLands**(): [`CellCollection`](CellCollection.md)[]

An array of collections with 'lands' of contiguous selecteed cells of this collection.

#### Returns

[`CellCollection`](CellCollection.md)[]

#### Source

[core/cell-collection.module.ts:834](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L834)

## Methods

### `[iterator]`()

> **\[iterator\]**(): `object`

Allows iterating over cells with 'for... of...' loop.

#### Returns

`object`

A cell object.

##### next()

> **next**: () => `object`

###### Returns

`object`

###### done

> **done**: `boolean` = `!(index in data)`

###### value

> **value**: [`AbstractCell`](AbstractCell.md)

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`[iterator]`](AbstractCellCollection.md#%5Biterator%5D)

#### Example

```ts
// Iterate over cells.

for (const cell of myCellCollection) {
  console.log(cell)
}
```

#### Source

[core/cell-collection.module.ts:915](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L915)

***

### at()

> **at**(`row`, `col`?, `tube`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Returns the cell at given position.

#### Parameters

• **row**: `number`

The row number of the cell.

• **col?**: `number`

The column number of the cell.

• **tube?**: `number`

The tube number of the cell.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at given position or `undefined` if it does not exist.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`at`](AbstractCellCollection.md#at)

#### Source

[core/cell-collection.module.ts:331](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L331)

***

### back()

> **back**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at next tube.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at next tube, in same row and column, or `undefined` if not found.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`back`](AbstractCellCollection.md#back)

#### Source

[core/cell-collection.module.ts:460](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L460)

***

### blur()

#### blur()

> **blur**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Blur all cells of this collection (there should be none or only one).

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The blurred cell or `undefined` if no cell was focused.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`blur`](AbstractCellCollection.md#blur)

##### Source

[core/cell-collection.module.ts:693](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L693)

#### blur(cell)

> **blur**(`cell`?): [`AbstractCell`](AbstractCell.md)

Blur a specific cell.

##### Parameters

• **cell?**: [`AbstractCell`](AbstractCell.md)

The cell to blur.

##### Returns

[`AbstractCell`](AbstractCell.md)

The passed cell.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`blur`](AbstractCellCollection.md#blur)

##### Source

[core/cell-collection.module.ts:694](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L694)

#### blur(row, col, tube)

> **blur**(`row`, `col`, `tube`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Blur a cell at given position.

##### Parameters

• **row**: `number`

The row of the cell to blur.

• **col**: `number`

The column of the cell to blur.

• **tube?**: `number`

The tube of the cell to blur.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The blurred cell or `undefined` if the cell was not found.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`blur`](AbstractCellCollection.md#blur)

##### Source

[core/cell-collection.module.ts:695](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L695)

#### blur(index)

> **blur**(`index`): `undefined` \| [`AbstractCell`](AbstractCell.md)

Blur a cell at given index.

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the cell to blur.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The blurred cell or `undefined` if the cell was not found.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`blur`](AbstractCellCollection.md#blur)

##### Source

[core/cell-collection.module.ts:700](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L700)

***

### clear()

> **clear**(): `void`

Clears the collection.

#### Returns

`void`

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`clear`](AbstractCellCollection.md#clear)

#### Source

[core/cell-collection.module.ts:496](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L496)

***

### concat()

> **concat**(`collection`): [`CellCollection`](CellCollection.md)

Concatenate (union) two collections and return a new collection.

#### Parameters

• **collection**: [`CellCollection`](CellCollection.md)

The collection to add to this one.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with cells from both.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`concat`](AbstractCellCollection.md#concat)

#### Source

[core/cell-collection.module.ts:520](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L520)

***

### difference()

> **difference**(`collection`): [`CellCollection`](CellCollection.md)

Computes the difference between two collections and return a new collection.

#### Parameters

• **collection**: [`CellCollection`](CellCollection.md)

The collection to compute difference with this one.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with difference (cells of `collection`
that are only present in this collection).

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`difference`](AbstractCellCollection.md#difference)

#### Source

[core/cell-collection.module.ts:532](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L532)

***

### dispose()

> **dispose**(): `void`

Tear-down the collection.

#### Returns

`void`

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`dispose`](AbstractCellCollection.md#dispose)

#### Source

[core/cell-collection.module.ts:115](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L115)

***

### down()

> **down**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at next row.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at next row, in same column and tube, or `undefined` if not found.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`down`](AbstractCellCollection.md#down)

#### Source

[core/cell-collection.module.ts:440](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L440)

***

### entries()

> **entries**(): `IterableIterator`\<[`number`, [`AbstractCell`](AbstractCell.md)]\>

Get the collection entries.

#### Returns

`IterableIterator`\<[`number`, [`AbstractCell`](AbstractCell.md)]\>

An iterrator on the collection's entries.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`entries`](AbstractCellCollection.md#entries)

#### Source

[core/cell-collection.module.ts:500](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L500)

***

### every()

> **every**(`callback`): `boolean`

Returns `true` if all cells of this collection conform to provided test function.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The user provided callback.

#### Returns

`boolean`

`true` if all cells of this collection conform to provided test function.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`every`](AbstractCellCollection.md#every)

#### Source

[core/cell-collection.module.ts:410](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L410)

***

### filter()

> **filter**(`callback`): [`CellCollection`](CellCollection.md)

Filter cells with a test function.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The test function to filter the collection.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with the filtered cells.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`filter`](AbstractCellCollection.md#filter)

#### Source

[core/cell-collection.module.ts:470](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L470)

***

### filterByColumn()

> **filterByColumn**(`col`): [`CellCollection`](CellCollection.md)

Get all cells in a column.

#### Parameters

• **col**: `number`

The number of the column to get cells from.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with cells at given column.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`filterByColumn`](AbstractCellCollection.md#filterbycolumn)

#### Source

[core/cell-collection.module.ts:484](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L484)

***

### filterByRow()

> **filterByRow**(`row`): [`CellCollection`](CellCollection.md)

Get all cells in a row.

#### Parameters

• **row**: `number`

The number of the row to get cells from.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with cells at given row.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`filterByRow`](AbstractCellCollection.md#filterbyrow)

#### Source

[core/cell-collection.module.ts:478](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L478)

***

### filterByTube()

> **filterByTube**(`tube`): [`CellCollection`](CellCollection.md)

Get all cells in a tube.

#### Parameters

• **tube**: `number`

The number of the tube to get cells from.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with cells at given tube.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`filterByTube`](AbstractCellCollection.md#filterbytube)

#### Source

[core/cell-collection.module.ts:490](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L490)

***

### find()

> **find**(`callback`): `undefined` \| [`AbstractCell`](AbstractCell.md)

Try to find a cell given a test function.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The test function to find a cell.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

A cell if found or `undefined`.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`find`](AbstractCellCollection.md#find)

#### Source

[core/cell-collection.module.ts:434](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L434)

***

### focus()

#### focus()

> **focus**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark the first cell of the collection as focused and all other cells as blurred.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell or `undefined` if the collection is empty.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`focus`](AbstractCellCollection.md#focus)

##### Source

[core/cell-collection.module.ts:641](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L641)

#### focus(cell)

> **focus**(`cell`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark a cell as focused and all other cells as blurred.

##### Parameters

• **cell?**: [`AbstractCell`](AbstractCell.md)

The cell to focus.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell or `undefined` if the collection is empty.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`focus`](AbstractCellCollection.md#focus)

##### Source

[core/cell-collection.module.ts:642](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L642)

#### focus(row, col, tube)

> **focus**(`row`, `col`, `tube`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark a cell as focused and all other cells as blurred.

##### Parameters

• **row**: `number`

The row of the cell to focus.

• **col**: `number`

The column of the cell to focus.

• **tube?**: `number`

The tube of the cell to focus.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell or `undefined` if the collection is empty.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`focus`](AbstractCellCollection.md#focus)

##### Source

[core/cell-collection.module.ts:643](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L643)

#### focus(index)

> **focus**(`index`): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark the cell at given index as focused.

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the cell to focus.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell or `undefined` if the collection is empty.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`focus`](AbstractCellCollection.md#focus)

##### Source

[core/cell-collection.module.ts:648](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L648)

***

### forEach()

> **forEach**(`callback`): `void`

Apply a function to all cells of this collection.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The function to apply to each cell of this collection.

#### Returns

`void`

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`forEach`](AbstractCellCollection.md#foreach)

#### Source

[core/cell-collection.module.ts:422](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L422)

***

### front()

> **front**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at previous tube.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at previous tube, in same row and column, or `undefined` if not found.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`front`](AbstractCellCollection.md#front)

#### Source

[core/cell-collection.module.ts:465](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L465)

***

### has()

#### has(cell)

> **has**(`cell`?): `boolean`

Returns `true` if this collection contains the given cell.

##### Parameters

• **cell?**: [`AbstractCell`](AbstractCell.md)

##### Returns

`boolean`

`true` if this collection contains the cell.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`has`](AbstractCellCollection.md#has)

##### Source

[core/cell-collection.module.ts:295](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L295)

#### has(row, col, tube)

> **has**(`row`, `col`?, `tube`?): `boolean`

Returns `true` if this collection contains a cell with given row, column and eventually tube numbers.

##### Parameters

• **row**: `number`

The row number to test.

• **col?**: `number`

The column number to test.

• **tube?**: `number`

The tube number to test.

##### Returns

`boolean`

`true` if this collection contains the cell at position.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`has`](AbstractCellCollection.md#has)

##### Source

[core/cell-collection.module.ts:296](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L296)

#### has(index)

> **has**(`index`): `boolean`

Returns `true` if this collection has a cell at given index.

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index to test.

##### Returns

`boolean`

`true` if this collection contains a cell at given index.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`has`](AbstractCellCollection.md#has)

##### Source

[core/cell-collection.module.ts:297](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L297)

***

### in()

#### in(range)

> **in**(`range`): [`CellCollection`](CellCollection.md)

Get a subset of this collection from a range.

##### Parameters

• **range**: [`CellRange`](../interfaces/CellRange.md)

The range to gett from the collection.

##### Returns

[`CellCollection`](CellCollection.md)

A subset of this collection in a new collection.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`in`](AbstractCellCollection.md#in)

##### Source

[core/cell-collection.module.ts:149](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L149)

#### in(bounds)

> **in**(`bounds`): [`CellCollection`](CellCollection.md)

Get a new cell collection from bounds in this collection.

##### Parameters

• **bounds**: [`CellBounds`](../interfaces/CellBounds.md)

The boundaries of the subset.

##### Returns

[`CellCollection`](CellCollection.md)

A subset of this collection in a new collection.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`in`](AbstractCellCollection.md#in)

##### Source

[core/cell-collection.module.ts:150](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L150)

#### in(begin, end)

> **in**(`begin`, `end`): [`CellCollection`](CellCollection.md)

Get a new cell collection between two cells of this collection.

##### Parameters

• **begin**: [`AbstractCell`](AbstractCell.md)

The first cell to extract.

• **end**: [`AbstractCell`](AbstractCell.md)

The last cell to extract.

##### Returns

[`CellCollection`](CellCollection.md)

A subset of this collection in a new collection.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`in`](AbstractCellCollection.md#in)

##### Source

[core/cell-collection.module.ts:151](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L151)

#### in(begin, end)

> **in**(`begin`, `end`): [`CellCollection`](CellCollection.md)

Get a new cell collection between two cells positions in this collection.

##### Parameters

• **begin**: [`CellIndex`](../interfaces/CellIndex.md)

The position of the first cell to extract.

• **end**: [`CellIndex`](../interfaces/CellIndex.md)

The position of the last cell to extract.

##### Returns

[`CellCollection`](CellCollection.md)

A subset of this collection in a new collection.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`in`](AbstractCellCollection.md#in)

##### Source

[core/cell-collection.module.ts:152](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L152)

#### in(index, size)

> **in**(`index`, `size`): [`CellCollection`](CellCollection.md)

Get a new cell collection with a cell index and a size.

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the first cell to extract.

• **size**: [`CellSize`](../interfaces/CellSize.md)

The size to extract from the index.

##### Returns

[`CellCollection`](CellCollection.md)

A subset of this collection in a new collection.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`in`](AbstractCellCollection.md#in)

##### Source

[core/cell-collection.module.ts:153](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L153)

***

### indexOf()

> **indexOf**(`cell`, `fromIndex`?): `number`

Get the index of a specific cell in this collection.

#### Parameters

• **cell**: [`AbstractCell`](AbstractCell.md)

The cell to get the index of.

• **fromIndex?**: `number`

Begin searching index from this index.

#### Returns

`number`

The index of the cell.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`indexOf`](AbstractCellCollection.md#indexof)

#### Source

[core/cell-collection.module.ts:145](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L145)

***

### intersection()

> **intersection**(`collection`): [`CellCollection`](CellCollection.md)

Computes intersection between two collections.

#### Parameters

• **collection**: [`CellCollection`](CellCollection.md)

The collection to compute intersection with.

#### Returns

[`CellCollection`](CellCollection.md)

A new cell collection with intersection of this collection and the provided one
(cells that are present in both collections).

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`intersection`](AbstractCellCollection.md#intersection)

#### Source

[core/cell-collection.module.ts:524](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L524)

***

### keys()

> **keys**(): `IterableIterator`\<`number`\>

Get the collection keys.

#### Returns

`IterableIterator`\<`number`\>

An iterrator on the collection's keys.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`keys`](AbstractCellCollection.md#keys)

#### Source

[core/cell-collection.module.ts:508](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L508)

***

### left()

> **left**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at previous column.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at previous column, in same row and tube, or `undefined` if not found.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`left`](AbstractCellCollection.md#left)

#### Source

[core/cell-collection.module.ts:455](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L455)

***

### map()

> **map**(`callback`): `any`[]

Return an `Array` populated with the result of calling provided function to each cell.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The function to apply to each cell of this collection.

#### Returns

`any`[]

An array resulting of the function.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`map`](AbstractCellCollection.md#map)

#### Source

[core/cell-collection.module.ts:428](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L428)

***

### pop()

> **pop**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Remove the last cell of the collection.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The removed cell or undefined if it was not found.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`pop`](AbstractCellCollection.md#pop)

#### Source

[core/cell-collection.module.ts:141](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L141)

***

### push()

> **push**(...`items`): `number`

Push one or more item at the end of the collection.

#### Parameters

• ...**items**: [`AbstractCell`](AbstractCell.md)[]

One or more `AbstractCell` objects.

#### Returns

`number`

The new length of the collection.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`push`](AbstractCellCollection.md#push)

#### Source

[core/cell-collection.module.ts:124](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L124)

***

### resetSelection()

> **resetSelection**(): [`CellCollection`](CellCollection.md)

An alias for `unselect()`. Unselect all cells.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with unselected cells.

#### Source

[core/cell-collection.module.ts:547](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L547)

***

### right()

> **right**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at next column.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at next column, in same row and tube, or `undefined` if not found.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`right`](AbstractCellCollection.md#right)

#### Source

[core/cell-collection.module.ts:450](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L450)

***

### select()

#### select()

> **select**(): [`CellCollection`](CellCollection.md)

Mark all cells of this collection as selected.

##### Returns

[`CellCollection`](CellCollection.md)

A new collection as selection.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`select`](AbstractCellCollection.md#select)

##### Source

[core/cell-collection.module.ts:551](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L551)

#### select(cell)

> **select**(`cell`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark a cell as selected.

##### Parameters

• **cell?**: [`AbstractCell`](AbstractCell.md)

The cell to select.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The selected cell or `undefined` if it was not found.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`select`](AbstractCellCollection.md#select)

##### Source

[core/cell-collection.module.ts:552](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L552)

#### select(row, col, tube)

> **select**(`row`, `col`, `tube`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark the cell at given position as selected.

##### Parameters

• **row**: `number`

The row of the cell to select.

• **col**: `number`

The column of the cell to select.

• **tube?**: `number`

The tube of the cell to select.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The selected cell or `undefined` if it was not found.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`select`](AbstractCellCollection.md#select)

##### Source

[core/cell-collection.module.ts:553](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L553)

#### select(index)

> **select**(`index`): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark the cell at given index as selected.

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the cell to select.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The selected cell or `undefined` if it was not found.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`select`](AbstractCellCollection.md#select)

##### Source

[core/cell-collection.module.ts:558](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L558)

***

### shift()

> **shift**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Remove the first cell of the collection.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The removed cell or undefined if it was not found.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`shift`](AbstractCellCollection.md#shift)

#### Source

[core/cell-collection.module.ts:137](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L137)

***

### shuffle()

> **shuffle**(): [`CellCollection`](CellCollection.md)

Shuffle the cells.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with shuffled cells.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`shuffle`](AbstractCellCollection.md#shuffle)

#### Source

[core/cell-collection.module.ts:344](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L344)

***

### some()

> **some**(`callback`): `boolean`

Returns `true` if at least one cell of this collection conforms to provided test function.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The user provided callback.

#### Returns

`boolean`

`true` if at least one cell of this collection conforms to provided test function.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`some`](AbstractCellCollection.md#some)

#### Source

[core/cell-collection.module.ts:416](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L416)

***

### sort()

> **sort**(`compareFn`?): [`CellCollection`](CellCollection.md)

If a comparison function is provided, sort the cells with it,
otherwise sort the cells by row, column and tube ascending.

#### Parameters

• **compareFn?**

A comparison function to sort the collection.

#### Returns

[`CellCollection`](CellCollection.md)

A new sorted collection.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`sort`](AbstractCellCollection.md#sort)

#### Source

[core/cell-collection.module.ts:353](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L353)

***

### sortReverse()

> **sortReverse**(): [`CellCollection`](CellCollection.md)

Sort the cells by row, column and tube descending.

#### Returns

[`CellCollection`](CellCollection.md)

A new sorted collection.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`sortReverse`](AbstractCellCollection.md#sortreverse)

#### Source

[core/cell-collection.module.ts:384](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L384)

***

### toArray()

> **toArray**(): [`AbstractCell`](AbstractCell.md)[]

Get the collection as a unidimensional `Array` of cells.

#### Returns

[`AbstractCell`](AbstractCell.md)[]

An array of cells.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`toArray`](AbstractCellCollection.md#toarray)

#### Source

[core/cell-collection.module.ts:512](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L512)

***

### toSet()

> **toSet**(): `Set`\<[`AbstractCell`](AbstractCell.md)\>

Get the collection as a unidimensional `Set` of cells.

#### Returns

`Set`\<[`AbstractCell`](AbstractCell.md)\>

A set of cells.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`toSet`](AbstractCellCollection.md#toset)

#### Source

[core/cell-collection.module.ts:516](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L516)

***

### unselect()

#### unselect()

> **unselect**(): [`CellCollection`](CellCollection.md)

Mark all cells of this collection as unselected.

##### Returns

[`CellCollection`](CellCollection.md)

A new collection as selection.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`unselect`](AbstractCellCollection.md#unselect)

##### Source

[core/cell-collection.module.ts:597](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L597)

#### unselect(cell)

> **unselect**(`cell`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark a cell as unselected.

##### Parameters

• **cell?**: [`AbstractCell`](AbstractCell.md)

The cell to unselect.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The unselected cell or undefined if it was not found.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`unselect`](AbstractCellCollection.md#unselect)

##### Source

[core/cell-collection.module.ts:598](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L598)

#### unselect(row, col, tube)

> **unselect**(`row`, `col`, `tube`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark a cell at given position as unselected.

##### Parameters

• **row**: `number`

The row of the cell to unselect.

• **col**: `number`

The column of the cell to unselect.

• **tube?**: `number`

The tube of the cell to unselect.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The unselected cell or undefined if it was not found.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`unselect`](AbstractCellCollection.md#unselect)

##### Source

[core/cell-collection.module.ts:599](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L599)

#### unselect(index)

> **unselect**(`index`): `undefined` \| [`AbstractCell`](AbstractCell.md)

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the cell to unselect.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The unselected cell or undefined if it was not found.

##### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`unselect`](AbstractCellCollection.md#unselect)

##### Source

[core/cell-collection.module.ts:604](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L604)

***

### unshift()

> **unshift**(...`items`): `number`

Insert one or more item at the beginning of the collection.

#### Parameters

• ...**items**: [`AbstractCell`](AbstractCell.md)[]

One or more `AbstractCell` objects.

#### Returns

`number`

The new length of the collection.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`unshift`](AbstractCellCollection.md#unshift)

#### Source

[core/cell-collection.module.ts:128](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L128)

***

### up()

> **up**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at previous row.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at previous row, in same column and tube, or `undefined` if not found.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`up`](AbstractCellCollection.md#up)

#### Source

[core/cell-collection.module.ts:445](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L445)

***

### values()

> **values**(): `IterableIterator`\<[`AbstractCell`](AbstractCell.md)\>

Get the collection values.

#### Returns

`IterableIterator`\<[`AbstractCell`](AbstractCell.md)\>

An iterrator on the collection's values.

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`values`](AbstractCellCollection.md#values)

#### Source

[core/cell-collection.module.ts:504](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L504)

***

### xor()

> **xor**(`collection`): [`CellCollection`](CellCollection.md)

Computes the symmetric difference (exclusive or) between two collections.

#### Parameters

• **collection**: [`CellCollection`](CellCollection.md)

The collection to compute symmetric difference with this one.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with symmetric difference (cells of `collection`
that are not present in this collection, and cells of this collection that are not present in `collection`).

#### Implementation of

[`AbstractCellCollection`](AbstractCellCollection.md).[`xor`](AbstractCellCollection.md#xor)

#### Source

[core/cell-collection.module.ts:536](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L536)

***

### fromArray()

> `static` **fromArray**(`cells`): [`CellCollection`](CellCollection.md)

Creates a new `CellCollection` from a 1D `Array` of `AbstractCell`.

#### Parameters

• **cells**: [`AbstractCell`](AbstractCell.md)[]

The cells to create the `CellCollection` from.

#### Returns

[`CellCollection`](CellCollection.md)

A new `CellCollection`.

#### Source

[core/cell-collection.module.ts:26](https://github.com/benoitlahoz/cell-collection/blob/77253b777a20bbc33ec2a602f2d75b581c780e1f/src/core/cell-collection.module.ts#L26)
