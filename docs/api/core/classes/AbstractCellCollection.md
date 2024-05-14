[cell-collection](../../modules.md) / [core](../index.md) / AbstractCellCollection

# Class: `abstract` AbstractCellCollection

An abstract class that defines a model for implementing `CellCollection`.

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

[abstract/cell-collection.abstract.ts:66](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L66)

***

### elements?

> `optional` `abstract` **elements**: (`undefined` \| `Element`)[]

If cell collection is applying to DOM, the elements of this collection's cells.

#### Source

[abstract/cell-collection.abstract.ts:83](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L83)

***

### firstCell

> `abstract` **firstCell**: `undefined` \| [`AbstractCell`](AbstractCell.md)

The first cell of the collection at 0 for row, column and tube.

#### Source

[abstract/cell-collection.abstract.ts:34](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L34)

***

### firstColumnNumber

> `abstract` **firstColumnNumber**: `number`

Number of the first column.

#### Source

[abstract/cell-collection.abstract.ts:46](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L46)

***

### firstRowNumber

> `abstract` **firstRowNumber**: `number`

Number of the first row.

#### Source

[abstract/cell-collection.abstract.ts:42](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L42)

***

### firstTubeNumber

> `abstract` **firstTubeNumber**: `number`

Number of the first tube.

#### Source

[abstract/cell-collection.abstract.ts:50](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L50)

***

### focused

> `abstract` **focused**: `undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell.

#### Source

[abstract/cell-collection.abstract.ts:79](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L79)

***

### lastCell

> `abstract` **lastCell**: `undefined` \| [`AbstractCell`](AbstractCell.md)

The last cell of the collection, at the end position for row, column and tube.

#### Source

[abstract/cell-collection.abstract.ts:38](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L38)

***

### lastColumnNumber

> `abstract` **lastColumnNumber**: `number`

Number of the last column.

#### Source

[abstract/cell-collection.abstract.ts:58](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L58)

***

### lastRowNumber

> `abstract` **lastRowNumber**: `number`

Number of the last row.

#### Source

[abstract/cell-collection.abstract.ts:54](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L54)

***

### lastTubeNumber

> `abstract` **lastTubeNumber**: `number`

Number of the last tube.

#### Source

[abstract/cell-collection.abstract.ts:62](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L62)

***

### length

> `abstract` **length**: `number`

The number of cells in the collection.

#### Source

[abstract/cell-collection.abstract.ts:30](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L30)

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

[abstract/cell-collection.abstract.ts:75](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L75)

***

### selectionLands?

> `optional` `abstract` **selectionLands**: [`AbstractCellCollection`](AbstractCellCollection.md)[]

An array of collections with 'lands' of contiguous selecteed cells of this collection.

#### Source

[abstract/cell-collection.abstract.ts:87](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L87)

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

[abstract/cell-collection.abstract.ts:612](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L612)

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

[abstract/cell-collection.abstract.ts:213](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L213)

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

[abstract/cell-collection.abstract.ts:327](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L327)

***

### blur()

#### blur()

> `abstract` **blur**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Blur all cells of this collection (there should be none or only one).

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The blurred cell or `undefined` if no cell was focused.

##### Source

[abstract/cell-collection.abstract.ts:568](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L568)

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

[abstract/cell-collection.abstract.ts:575](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L575)

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

[abstract/cell-collection.abstract.ts:584](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L584)

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

[abstract/cell-collection.abstract.ts:595](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L595)

#### blur(args)

> `abstract` **blur**(...`args`): `undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Parameters

• ...**args**: (`undefined` \| `number` \| [`CellIndex`](../interfaces/CellIndex.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Source

[abstract/cell-collection.abstract.ts:596](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L596)

***

### clear()

> `abstract` **clear**(): `void`

Clears the collection.

#### Returns

`void`

#### Source

[abstract/cell-collection.abstract.ts:375](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L375)

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

[abstract/cell-collection.abstract.ts:418](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L418)

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

[abstract/cell-collection.abstract.ts:438](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L438)

***

### dispose()

> `abstract` **dispose**(): `void`

Tear-down the collection.

#### Returns

`void`

#### Source

[abstract/cell-collection.abstract.ts:92](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L92)

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

[abstract/cell-collection.abstract.ts:291](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L291)

***

### entries()

> `abstract` **entries**(): `IterableIterator`\<[`number`, [`AbstractCell`](AbstractCell.md)]\>

Get the collection entries.

#### Returns

`IterableIterator`\<[`number`, [`AbstractCell`](AbstractCell.md)]\>

An iterrator on the collection's entries.

#### Source

[abstract/cell-collection.abstract.ts:382](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L382)

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

[abstract/cell-collection.abstract.ts:250](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L250)

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

[abstract/cell-collection.abstract.ts:344](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L344)

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

[abstract/cell-collection.abstract.ts:362](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L362)

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

[abstract/cell-collection.abstract.ts:354](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L354)

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

[abstract/cell-collection.abstract.ts:370](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L370)

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

[abstract/cell-collection.abstract.ts:280](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L280)

***

### focus()

#### focus()

> `abstract` **focus**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Mark the first cell of the collection as focused and all other cells as blurred.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The focused cell or `undefined` if the collection is empty.

##### Source

[abstract/cell-collection.abstract.ts:529](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L529)

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

[abstract/cell-collection.abstract.ts:536](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L536)

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

[abstract/cell-collection.abstract.ts:547](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L547)

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

[abstract/cell-collection.abstract.ts:558](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L558)

#### focus(args)

> `abstract` **focus**(...`args`): `undefined` \| [`AbstractCell`](AbstractCell.md)

##### Parameters

• ...**args**: (`undefined` \| `number` \| [`CellIndex`](../interfaces/CellIndex.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

##### Source

[abstract/cell-collection.abstract.ts:559](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L559)

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

[abstract/cell-collection.abstract.ts:265](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L265)

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

[abstract/cell-collection.abstract.ts:336](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L336)

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

[abstract/cell-collection.abstract.ts:184](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L184)

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

[abstract/cell-collection.abstract.ts:193](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L193)

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

[abstract/cell-collection.abstract.ts:200](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L200)

#### has(args)

> `abstract` **has**(...`args`): `boolean`

##### Parameters

• ...**args**: (`undefined` \| `number` \| [`CellIndex`](../interfaces/CellIndex.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

`boolean`

##### Source

[abstract/cell-collection.abstract.ts:201](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L201)

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

[abstract/cell-collection.abstract.ts:139](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L139)

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

[abstract/cell-collection.abstract.ts:146](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L146)

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

[abstract/cell-collection.abstract.ts:154](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L154)

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

[abstract/cell-collection.abstract.ts:165](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L165)

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

[abstract/cell-collection.abstract.ts:173](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L173)

#### in(args)

> `abstract` **in**(...`args`): [`AbstractCellCollection`](AbstractCellCollection.md)

##### Parameters

• ...**args**: ([`CellIndex`](../interfaces/CellIndex.md) \| [`CellSize`](../interfaces/CellSize.md) \| [`CellRange`](../interfaces/CellRange.md) \| [`CellBounds`](../interfaces/CellBounds.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

##### Source

[abstract/cell-collection.abstract.ts:174](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L174)

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

[abstract/cell-collection.abstract.ts:131](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L131)

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

[abstract/cell-collection.abstract.ts:427](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L427)

***

### keys()

> `abstract` **keys**(): `IterableIterator`\<`number`\>

Get the collection keys.

#### Returns

`IterableIterator`\<`number`\>

An iterrator on the collection's keys.

#### Source

[abstract/cell-collection.abstract.ts:396](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L396)

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

[abstract/cell-collection.abstract.ts:318](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L318)

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

[abstract/cell-collection.abstract.ts:273](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L273)

***

### pop()

> `abstract` **pop**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Remove the last cell of the collection.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The removed cell or undefined if it was not found.

#### Source

[abstract/cell-collection.abstract.ts:122](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L122)

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

[abstract/cell-collection.abstract.ts:100](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L100)

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

[abstract/cell-collection.abstract.ts:309](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L309)

***

### select()

#### select()

> `abstract` **select**(): [`AbstractCellCollection`](AbstractCellCollection.md)

Mark all cells of this collection as selected.

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new collection as selection.

##### Source

[abstract/cell-collection.abstract.ts:454](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L454)

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

[abstract/cell-collection.abstract.ts:461](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L461)

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

[abstract/cell-collection.abstract.ts:472](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L472)

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

[abstract/cell-collection.abstract.ts:483](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L483)

#### select(args)

> `abstract` **select**(...`args`): `undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Parameters

• ...**args**: (`undefined` \| `number` \| [`CellIndex`](../interfaces/CellIndex.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Source

[abstract/cell-collection.abstract.ts:484](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L484)

***

### shift()

> `abstract` **shift**(): `undefined` \| [`AbstractCell`](AbstractCell.md)

Remove the first cell of the collection.

#### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The removed cell or undefined if it was not found.

#### Source

[abstract/cell-collection.abstract.ts:115](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L115)

***

### shuffle()

> `abstract` **shuffle**(): [`CellCollection`](CellCollection.md)

Shuffle the cells.

#### Returns

[`CellCollection`](CellCollection.md)

A new collection with shuffled cells.

#### Source

[abstract/cell-collection.abstract.ts:224](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L224)

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

[abstract/cell-collection.abstract.ts:258](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L258)

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

[abstract/cell-collection.abstract.ts:233](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L233)

***

### sortReverse()

> `abstract` **sortReverse**(): [`AbstractCellCollection`](AbstractCellCollection.md)

Sort the cells by row, column and tube descending.

#### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new sorted collection.

#### Source

[abstract/cell-collection.abstract.ts:242](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L242)

***

### toArray()

> `abstract` **toArray**(): [`AbstractCell`](AbstractCell.md)[]

Get the collection as a unidimensional `Array` of cells.

#### Returns

[`AbstractCell`](AbstractCell.md)[]

An array of cells.

#### Source

[abstract/cell-collection.abstract.ts:403](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L403)

***

### toSet()

> `abstract` **toSet**(): `Set`\<[`AbstractCell`](AbstractCell.md)\>

Get the collection as a unidimensional `Set` of cells.

#### Returns

`Set`\<[`AbstractCell`](AbstractCell.md)\>

A set of cells.

#### Source

[abstract/cell-collection.abstract.ts:410](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L410)

***

### unselect()

#### unselect()

> `abstract` **unselect**(): [`AbstractCellCollection`](AbstractCellCollection.md)

Mark all cells of this collection as unselected.

##### Returns

[`AbstractCellCollection`](AbstractCellCollection.md)

A new collection as selection.

##### Source

[abstract/cell-collection.abstract.ts:493](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L493)

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

[abstract/cell-collection.abstract.ts:500](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L500)

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

[abstract/cell-collection.abstract.ts:509](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L509)

#### unselect(index)

> `abstract` **unselect**(`index`): `undefined` \| [`AbstractCell`](AbstractCell.md)

##### Parameters

• **index**: [`CellIndex`](../interfaces/CellIndex.md)

The index of the cell to unselect.

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md)

The unselected cell or undefined if it was not found.

##### Source

[abstract/cell-collection.abstract.ts:519](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L519)

#### unselect(args)

> `abstract` **unselect**(...`args`): `undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Parameters

• ...**args**: (`undefined` \| `number` \| [`CellIndex`](../interfaces/CellIndex.md) \| [`AbstractCell`](AbstractCell.md))[]

##### Returns

`undefined` \| [`AbstractCell`](AbstractCell.md) \| [`AbstractCellCollection`](AbstractCellCollection.md)

##### Source

[abstract/cell-collection.abstract.ts:520](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L520)

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

[abstract/cell-collection.abstract.ts:108](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L108)

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

[abstract/cell-collection.abstract.ts:300](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L300)

***

### values()

> `abstract` **values**(): `IterableIterator`\<[`AbstractCell`](AbstractCell.md)\>

Get the collection values.

#### Returns

`IterableIterator`\<[`AbstractCell`](AbstractCell.md)\>

An iterrator on the collection's values.

#### Source

[abstract/cell-collection.abstract.ts:389](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L389)

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

[abstract/cell-collection.abstract.ts:447](https://github.com/benoitlahoz/cell-collection/blob/90d2a7b2a31a3dd80adcbf1669c3269d51abfb08/src/abstract/cell-collection.abstract.ts#L447)
