[cell-collection](../../modules.md) / [Core](../index.md) / AbstractCellCollection

# Class: `abstract` AbstractCellCollection

An abstract class that defines a model for implementing `CellCollection`.

## Abstract

This class has no implementation.

## Constructors

### new AbstractCellCollection()

> **new AbstractCellCollection**(): [`AbstractCellCollection`](AbstractCellCollection.md)

#### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

## Properties

### bounds

> `abstract` **bounds**: [`CellBounds`](../interfaces/CellBounds.md)

Bounds with the first cell position and the last cell position.

#### Source

[abstract/cell-collection.abstract.ts:68](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L68)

***

### elements?

> `optional` `abstract` **elements**: (`undefined` \| `Element`)[]

If cell collection is applying to DOM, the elements of this collection's cells.

#### Source

[abstract/cell-collection.abstract.ts:85](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L85)

***

### firstCell

> `abstract` **firstCell**: `undefined` \| [`AbstractCell`](AbstractCell.md)

The first cell of the collection at 0 for row, column and tube.

#### Source

[abstract/cell-collection.abstract.ts:36](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L36)

***

### firstColumnNumber

> `abstract` **firstColumnNumber**: `number`

Number of the first column.

#### Source

[abstract/cell-collection.abstract.ts:48](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L48)

***

### firstRowNumber

> `abstract` **firstRowNumber**: `number`

Number of the first row.

#### Source

[abstract/cell-collection.abstract.ts:44](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L44)

***

### firstTubeNumber

> `abstract` **firstTubeNumber**: `number`

Number of the first tube.

#### Source

[abstract/cell-collection.abstract.ts:52](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L52)

***

### focused

> `abstract` **focused**: `undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell.

#### Source

[abstract/cell-collection.abstract.ts:81](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L81)

***

### lastCell

> `abstract` **lastCell**: `undefined` \| [`AbstractCell`](AbstractCell.md)

The last cell of the collection, at the end position for row, column and tube.

#### Source

[abstract/cell-collection.abstract.ts:40](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L40)

***

### lastColumnNumber

> `abstract` **lastColumnNumber**: `number`

Number of the last column.

#### Source

[abstract/cell-collection.abstract.ts:60](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L60)

***

### lastRowNumber

> `abstract` **lastRowNumber**: `number`

Number of the last row.

#### Source

[abstract/cell-collection.abstract.ts:56](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L56)

***

### lastTubeNumber

> `abstract` **lastTubeNumber**: `number`

Number of the last tube.

#### Source

[abstract/cell-collection.abstract.ts:64](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L64)

***

### length

> `abstract` **length**: `number`

The number of cells in the collection.

#### Source

[abstract/cell-collection.abstract.ts:32](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L32)

***

### selected

> `abstract` **selected**: [`AbstractCellCollection`](AbstractCellCollection.md)

A new cells collection from the selected cells of this collection.

#### Example

```ts
// ...
const cell = collection.select(0, 0, 0);
console.log(collection.selected.length) // 1
```

#### Source

[abstract/cell-collection.abstract.ts:77](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L77)

***

### selectionLands?

> `optional` `abstract` **selectionLands**: [`AbstractCellCollection`](AbstractCellCollection.md)[]

An array of collections with 'lands' of contiguous selecteed cells of this collection.

#### Source

[abstract/cell-collection.abstract.ts:89](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L89)

## Methods

### `[iterator]`()

> `abstract` **\[iterator\]**(): `any`

Allows iterating over cells with 'for... of...' loop.

#### Returns

`any`

A cell object.

#### Example

```ts
// Iterate over cells.

for (const cell of myCellCollection) {
  console.log(cell)
}
```

#### Source

[abstract/cell-collection.abstract.ts:614](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L614)

***

### at()

> `abstract` **at**(`row`, `col`?, `tube`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

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

#### Source

[abstract/cell-collection.abstract.ts:215](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L215)

***

### back()

> `abstract` **back**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at next tube.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at next tube, in same row and column, or `undefined` if not found.

#### Source

[abstract/cell-collection.abstract.ts:329](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L329)

***

### blur()

#### blur()

> `abstract` **blur**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Blur all cells of this collection (there should be none or only one).

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The blurred cell or `undefined` if no cell was focused.

##### Source

[abstract/cell-collection.abstract.ts:570](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L570)

#### blur(cell)

> `abstract` **blur**(`cell`?): [`AbstractCell`](AbstractCell.md)

Blur a specific cell.

##### Parameters

• **cell?**: [`AbstractCell`](AbstractCell.md)

The cell to blur.

##### Returns

[`AbstractCell`](AbstractCell.md)

The passed cell.

##### Source

[abstract/cell-collection.abstract.ts:577](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L577)

#### blur(row, col, tube)

> `abstract` **blur**(`row`, `col`?, `tube`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Blur a cell at given position.

##### Parameters

• **row**: `number`

The row of the cell to blur.

• **col?**: `number`

The column of the cell to blur.

• **tube?**: `number`

The tube of the cell to blur.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The blurred cell or `undefined` if the cell was not found.

##### Source

[abstract/cell-collection.abstract.ts:586](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L586)

#### blur(index)

> `abstract` **blur**(`index`): `undefined` \| [`AbstractCell`](AbstractCell.md)

Blur a cell at given index.

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the cell to blur.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The blurred cell or `undefined` if the cell was not found.

##### Source

[abstract/cell-collection.abstract.ts:597](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L597)

#### blur(args)

> `abstract` **blur**(...`args`): `undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Parameters

• ...**args**: (`undefined` \| `number` \| [`CellIndex`](../interfaces/CellIndex.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Source

[abstract/cell-collection.abstract.ts:598](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L598)

***

### clear()

> `abstract` **clear**(): `void`

Clears the collection.

#### Returns

`void`

#### Source

[abstract/cell-collection.abstract.ts:377](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L377)

***

### concat()

> `abstract` **concat**(`collection`): [`CellCollection`](CellCollection.md)

Concatenate (union) two collections and return a new collection.

#### Parameters

• **collection**: [`CellCollection`](CellCollection.md)

The collection to add to this one.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with cells from both.

#### Source

[abstract/cell-collection.abstract.ts:420](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L420)

***

### difference()

> `abstract` **difference**(`collection`): [`CellCollection`](CellCollection.md)

Computes the difference between two collections and return a new collection.

#### Parameters

• **collection**: [`CellCollection`](CellCollection.md)

The collection to compute difference with this one.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with difference (cells of `collection`
that are only present in this collection).

#### Source

[abstract/cell-collection.abstract.ts:440](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L440)

***

### dispose()

> `abstract` **dispose**(): `void`

Tear-down the collection.

#### Returns

`void`

#### Source

[abstract/cell-collection.abstract.ts:94](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L94)

***

### down()

> `abstract` **down**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at next row.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at next row, in same column and tube, or `undefined` if not found.

#### Source

[abstract/cell-collection.abstract.ts:293](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L293)

***

### entries()

> `abstract` **entries**(): `IterableIterator`\<[`number`, [`AbstractCell`](AbstractCell.md)]\>

Get the collection entries.

#### Returns

`IterableIterator`\<[`number`, [`AbstractCell`](AbstractCell.md)]\>

An iterrator on the collection's entries.

#### Source

[abstract/cell-collection.abstract.ts:384](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L384)

***

### every()

> `abstract` **every**(`callback`): `boolean`

Returns `true` if all cells of this collection conform to provided test function.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The user provided callback.

#### Returns

`boolean`

`true` if all cells of this collection conform to provided test function.

#### Source

[abstract/cell-collection.abstract.ts:252](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L252)

***

### filter()

> `abstract` **filter**(`callback`): [`AbstractCellCollection`](AbstractCellCollection.md)

Filter cells with a test function.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The test function to filter the collection.

#### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new collection with the filtered cells.

#### Source

[abstract/cell-collection.abstract.ts:346](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L346)

***

### filterByColumn()

> `abstract` **filterByColumn**(`col`): [`AbstractCellCollection`](AbstractCellCollection.md)

Get all cells in a column.

#### Parameters

• **col**: `number`

The number of the column to get cells from.

#### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new collection with cells at given column.

#### Source

[abstract/cell-collection.abstract.ts:364](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L364)

***

### filterByRow()

> `abstract` **filterByRow**(`row`): [`AbstractCellCollection`](AbstractCellCollection.md)

Get all cells in a row.

#### Parameters

• **row**: `number`

The number of the row to get cells from.

#### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new collection with cells at given row.

#### Source

[abstract/cell-collection.abstract.ts:356](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L356)

***

### filterByTube()

> `abstract` **filterByTube**(`tube`): [`AbstractCellCollection`](AbstractCellCollection.md)

Get all cells in a tube.

#### Parameters

• **tube**: `number`

The number of the tube to get cells from.

#### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new collection with cells at given tube.

#### Source

[abstract/cell-collection.abstract.ts:372](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L372)

***

### find()

> `abstract` **find**(`callback`): `undefined` \| [`AbstractCell`](AbstractCell.md)

Try to find a cell given a test function.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The test function to find a cell.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

A cell if found or `undefined`.

#### Source

[abstract/cell-collection.abstract.ts:282](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L282)

***

### focus()

#### focus()

> `abstract` **focus**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark the first cell of the collection as focused and all other cells as blurred.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell or `undefined` if the collection is empty.

##### Source

[abstract/cell-collection.abstract.ts:531](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L531)

#### focus(cell)

> `abstract` **focus**(`cell`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark a cell as focused and all other cells as blurred.

##### Parameters

• **cell?**: [`AbstractCell`](AbstractCell.md)

The cell to focus.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell or `undefined` if the collection is empty.

##### Source

[abstract/cell-collection.abstract.ts:538](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L538)

#### focus(row, col, tube)

> `abstract` **focus**(`row`, `col`?, `tube`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark a cell as focused and all other cells as blurred.

##### Parameters

• **row**: `number`

The row of the cell to focus.

• **col?**: `number`

The column of the cell to focus.

• **tube?**: `number`

The tube of the cell to focus.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell or `undefined` if the collection is empty.

##### Source

[abstract/cell-collection.abstract.ts:549](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L549)

#### focus(index)

> `abstract` **focus**(`index`): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark the cell at given index as focused.

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the cell to focus.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell or `undefined` if the collection is empty.

##### Source

[abstract/cell-collection.abstract.ts:560](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L560)

#### focus(args)

> `abstract` **focus**(...`args`): `undefined` \| [`AbstractCell`](AbstractCell.md)

##### Parameters

• ...**args**: (`undefined` \| `number` \| [`CellIndex`](../interfaces/CellIndex.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

##### Source

[abstract/cell-collection.abstract.ts:561](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L561)

***

### forEach()

> `abstract` **forEach**(`callback`): `void`

Apply a function to all cells of this collection.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The function to apply to each cell of this collection.

#### Returns

`void`

#### Source

[abstract/cell-collection.abstract.ts:267](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L267)

***

### front()

> `abstract` **front**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at previous tube.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at previous tube, in same row and column, or `undefined` if not found.

#### Source

[abstract/cell-collection.abstract.ts:338](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L338)

***

### has()

#### has(cell)

> `abstract` **has**(`cell`?): `boolean`

Returns `true` if this collection contains the given cell.

##### Parameters

• **cell?**: [`AbstractCell`](AbstractCell.md)

##### Returns

`boolean`

`true` if this collection contains the cell.

##### Source

[abstract/cell-collection.abstract.ts:186](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L186)

#### has(row, col, tube)

> `abstract` **has**(`row`, `col`, `tube`?): `boolean`

Returns `true` if this collection contains a cell with given row, column and eventually tube numbers.

##### Parameters

• **row**: `number`

The row number to test.

• **col**: `number`

The column number to test.

• **tube?**: `number`

The tube number to test.

##### Returns

`boolean`

`true` if this collection contains the cell at position.

##### Source

[abstract/cell-collection.abstract.ts:195](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L195)

#### has(index)

> `abstract` **has**(`index`): `boolean`

Returns `true` if this collection has a cell at given index.

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index to test.

##### Returns

`boolean`

`true` if this collection contains a cell at given index.

##### Source

[abstract/cell-collection.abstract.ts:202](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L202)

#### has(args)

> `abstract` **has**(...`args`): `boolean`

##### Parameters

• ...**args**: (`undefined` \| `number` \| [`CellIndex`](../interfaces/CellIndex.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

`boolean`

##### Source

[abstract/cell-collection.abstract.ts:203](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L203)

***

### in()

#### in(range)

> `abstract` **in**(`range`): [`AbstractCellCollection`](AbstractCellCollection.md)

Get a subset of this collection from a range.

##### Parameters

• **range**: [`CellRange`](../interfaces/CellRange.md)

The range to gett from the collection.

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A subset of this collection in a new collection.

##### Source

[abstract/cell-collection.abstract.ts:141](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L141)

#### in(bounds)

> `abstract` **in**(`bounds`): [`AbstractCellCollection`](AbstractCellCollection.md)

Get a new cell collection from bounds in this collection.

##### Parameters

• **bounds**: [`CellBounds`](../interfaces/CellBounds.md)

The boundaries of the subset.

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A subset of this collection in a new collection.

##### Source

[abstract/cell-collection.abstract.ts:148](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L148)

#### in(begin, end)

> `abstract` **in**(`begin`, `end`): [`AbstractCellCollection`](AbstractCellCollection.md)

Get a new cell collection between two cells of this collection.

##### Parameters

• **begin**: [`AbstractCell`](AbstractCell.md)

The first cell to extract.

• **end**: [`AbstractCell`](AbstractCell.md)

The last cell to extract.

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A subset of this collection in a new collection.

##### Source

[abstract/cell-collection.abstract.ts:156](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L156)

#### in(begin, end)

> `abstract` **in**(`begin`, `end`): [`AbstractCellCollection`](AbstractCellCollection.md)

Get a new cell collection between two cells positions in this collection.

##### Parameters

• **begin**: [`CellIndex`](../interfaces/CellIndex.md)

The position of the first cell to extract.

• **end**: [`CellIndex`](../interfaces/CellIndex.md)

The position of the last cell to extract.

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A subset of this collection in a new collection.

##### Source

[abstract/cell-collection.abstract.ts:167](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L167)

#### in(index, size)

> `abstract` **in**(`index`, `size`): [`AbstractCellCollection`](AbstractCellCollection.md)

Get a new cell collection with a cell index and a size.

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the first cell to extract.

• **size**: [`CellSize`](../interfaces/CellSize.md)

The size to extract from the index.

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A subset of this collection in a new collection.

##### Source

[abstract/cell-collection.abstract.ts:175](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L175)

#### in(args)

> `abstract` **in**(...`args`): [`AbstractCellCollection`](AbstractCellCollection.md)

##### Parameters

• ...**args**: ([`CellIndex`](../interfaces/CellIndex.md) \| [`CellSize`](../interfaces/CellSize.md) \| [`CellRange`](../interfaces/CellRange.md) \| [`CellBounds`](../interfaces/CellBounds.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

##### Source

[abstract/cell-collection.abstract.ts:176](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L176)

***

### indexOf()

> `abstract` **indexOf**(`cell`, `fromIndex`?): `number`

Get the index of a specific cell in this collection.

#### Parameters

• **cell**: [`AbstractCell`](AbstractCell.md)

The cell to get the index of.

• **fromIndex?**: `number`

Begin searching index from this index.

#### Returns

`number`

The index of the cell.

#### Source

[abstract/cell-collection.abstract.ts:133](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L133)

***

### intersection()

> `abstract` **intersection**(`collection`): [`AbstractCellCollection`](AbstractCellCollection.md)

Computes intersection between two collections.

#### Parameters

• **collection**: [`AbstractCellCollection`](AbstractCellCollection.md)

The collection to compute intersection with.

#### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new cell collection with intersection of this collection and the provided one
(cells that are present in both collections).

#### Source

[abstract/cell-collection.abstract.ts:429](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L429)

***

### keys()

> `abstract` **keys**(): `IterableIterator`\<`number`\>

Get the collection keys.

#### Returns

`IterableIterator`\<`number`\>

An iterrator on the collection's keys.

#### Source

[abstract/cell-collection.abstract.ts:398](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L398)

***

### left()

> `abstract` **left**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at previous column.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at previous column, in same row and tube, or `undefined` if not found.

#### Source

[abstract/cell-collection.abstract.ts:320](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L320)

***

### map()

> `abstract` **map**(`callback`): `any`[]

Return an `Array` populated with the result of calling provided function to each cell.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The function to apply to each cell of this collection.

#### Returns

`any`[]

An array resulting of the function.

#### Source

[abstract/cell-collection.abstract.ts:275](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L275)

***

### pop()

> `abstract` **pop**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Remove the last cell of the collection.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The removed cell or undefined if it was not found.

#### Source

[abstract/cell-collection.abstract.ts:124](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L124)

***

### push()

> `abstract` **push**(...`items`): `number`

Push one or more item at the end of the collection.

#### Parameters

• ...**items**: [`AbstractCell`](AbstractCell.md)[]

One or more `AbstractCell` objects.

#### Returns

`number`

The new length of the collection.

#### Source

[abstract/cell-collection.abstract.ts:102](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L102)

***

### right()

> `abstract` **right**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at next column.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at next column, in same row and tube, or `undefined` if not found.

#### Source

[abstract/cell-collection.abstract.ts:311](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L311)

***

### select()

#### select()

> `abstract` **select**(): [`AbstractCellCollection`](AbstractCellCollection.md)

Mark all cells of this collection as selected.

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new collection as selection.

##### Source

[abstract/cell-collection.abstract.ts:456](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L456)

#### select(cell)

> `abstract` **select**(`cell`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark a cell as selected.

##### Parameters

• **cell?**: [`AbstractCell`](AbstractCell.md)

The cell to select.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The selected cell or `undefined` if it was not found.

##### Source

[abstract/cell-collection.abstract.ts:463](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L463)

#### select(row, col, tube)

> `abstract` **select**(`row`, `col`?, `tube`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark the cell at given position as selected.

##### Parameters

• **row**: `number`

The row of the cell to select.

• **col?**: `number`

The column of the cell to select.

• **tube?**: `number`

The tube of the cell to select.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The selected cell or `undefined` if it was not found.

##### Source

[abstract/cell-collection.abstract.ts:474](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L474)

#### select(index)

> `abstract` **select**(`index`): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark the cell at given index as selected.

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the cell to select.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The selected cell or `undefined` if it was not found.

##### Source

[abstract/cell-collection.abstract.ts:485](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L485)

#### select(args)

> `abstract` **select**(...`args`): `undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Parameters

• ...**args**: (`undefined` \| `number` \| [`CellIndex`](../interfaces/CellIndex.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Source

[abstract/cell-collection.abstract.ts:486](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L486)

***

### shift()

> `abstract` **shift**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Remove the first cell of the collection.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The removed cell or undefined if it was not found.

#### Source

[abstract/cell-collection.abstract.ts:117](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L117)

***

### shuffle()

> `abstract` **shuffle**(): [`CellCollection`](CellCollection.md)

Shuffle the cells.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with shuffled cells.

#### Source

[abstract/cell-collection.abstract.ts:226](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L226)

***

### some()

> `abstract` **some**(`callback`): `boolean`

Returns `true` if at least one cell of this collection conforms to provided test function.

#### Parameters

• **callback**: [`CellCollectionCallback`](../type-aliases/CellCollectionCallback.md)

The user provided callback.

#### Returns

`boolean`

`true` if at least one cell of this collection conforms to provided test function.

#### Source

[abstract/cell-collection.abstract.ts:260](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L260)

***

### sort()

> `abstract` **sort**(`compareFn`?): [`AbstractCellCollection`](AbstractCellCollection.md)

If a comparison function is provided, sort the cells with it,
otherwise sort the cells by row, column and tube ascending.

#### Parameters

• **compareFn?**

A comparison function to sort the collection.

#### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new sorted collection.

#### Source

[abstract/cell-collection.abstract.ts:235](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L235)

***

### sortReverse()

> `abstract` **sortReverse**(): [`AbstractCellCollection`](AbstractCellCollection.md)

Sort the cells by row, column and tube descending.

#### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new sorted collection.

#### Source

[abstract/cell-collection.abstract.ts:244](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L244)

***

### toArray()

> `abstract` **toArray**(): [`AbstractCell`](AbstractCell.md)[]

Get the collection as a unidimensional `Array` of cells.

#### Returns

[`AbstractCell`](AbstractCell.md)[]

An array of cells.

#### Source

[abstract/cell-collection.abstract.ts:405](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L405)

***

### toSet()

> `abstract` **toSet**(): `Set`\<[`AbstractCell`](AbstractCell.md)\>

Get the collection as a unidimensional `Set` of cells.

#### Returns

`Set`\<[`AbstractCell`](AbstractCell.md)\>

A set of cells.

#### Source

[abstract/cell-collection.abstract.ts:412](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L412)

***

### unselect()

#### unselect()

> `abstract` **unselect**(): [`AbstractCellCollection`](AbstractCellCollection.md)

Mark all cells of this collection as unselected.

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new collection as selection.

##### Source

[abstract/cell-collection.abstract.ts:495](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L495)

#### unselect(cell)

> `abstract` **unselect**(`cell`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark a cell as unselected.

##### Parameters

• **cell?**: [`AbstractCell`](AbstractCell.md)

The cell to unselect.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The unselected cell or undefined if it was not found.

##### Source

[abstract/cell-collection.abstract.ts:502](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L502)

#### unselect(row, col, tube)

> `abstract` **unselect**(`row`, `col`?, `tube`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark a cell at given position as unselected.

##### Parameters

• **row**: `number`

The row of the cell to unselect.

• **col?**: `number`

The column of the cell to unselect.

• **tube?**: `number`

The tube of the cell to unselect.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The unselected cell or undefined if it was not found.

##### Source

[abstract/cell-collection.abstract.ts:511](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L511)

#### unselect(index)

> `abstract` **unselect**(`index`): `undefined` \| [`AbstractCell`](AbstractCell.md)

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the cell to unselect.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The unselected cell or undefined if it was not found.

##### Source

[abstract/cell-collection.abstract.ts:521](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L521)

#### unselect(args)

> `abstract` **unselect**(...`args`): `undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Parameters

• ...**args**: (`undefined` \| `number` \| [`CellIndex`](../interfaces/CellIndex.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Source

[abstract/cell-collection.abstract.ts:522](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L522)

***

### unshift()

> `abstract` **unshift**(...`items`): `number`

Insert one or more item at the beginning of the collection.

#### Parameters

• ...**items**: [`AbstractCell`](AbstractCell.md)[]

One or more `AbstractCell` objects.

#### Returns

`number`

The new length of the collection.

#### Source

[abstract/cell-collection.abstract.ts:110](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L110)

***

### up()

> `abstract` **up**(`from`?): `undefined` \| [`AbstractCell`](AbstractCell.md)

Given a cell, get the cell at previous row.

#### Parameters

• **from?**: [`AbstractCell`](AbstractCell.md)

The cell to begin the move from or `undefined`:
testing the parameter and the return value is left to the implementation.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The cell at previous row, in same column and tube, or `undefined` if not found.

#### Source

[abstract/cell-collection.abstract.ts:302](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L302)

***

### values()

> `abstract` **values**(): `IterableIterator`\<[`AbstractCell`](AbstractCell.md)\>

Get the collection values.

#### Returns

`IterableIterator`\<[`AbstractCell`](AbstractCell.md)\>

An iterrator on the collection's values.

#### Source

[abstract/cell-collection.abstract.ts:391](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L391)

***

### xor()

> `abstract` **xor**(`collection`): [`CellCollection`](CellCollection.md)

Computes the symmetric difference (exclusive or) between two collections.

#### Parameters

• **collection**: [`CellCollection`](CellCollection.md)

The collection to compute symmetric difference with this one.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with symmetric difference (cells of `collection`
that are not present in this collection, and cells of this collection that are not present in `collection`).

#### Source

[abstract/cell-collection.abstract.ts:449](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/abstract/cell-collection.abstract.ts#L449)
