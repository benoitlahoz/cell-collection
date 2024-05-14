[cell-collection](../../modules.md) / [Core](../index.md) / Cell

# Class: Cell

## Implements

- [`AbstractCell`](AbstractCell.md)

## Constructors

### new Cell()

> **new Cell**(`_range`): [`Cell`](Cell.md)

Represents a cell of a multidimensional array.

#### Parameters

• **\_range**: [`CellRange`](../interfaces/CellRange.md)

The range of the cell in rows and columns (and tubes in case of 3D).

#### Returns

[`Cell`](Cell.md)

#### Source

[core/cell.module.ts:20](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L20)

## Properties

### \_focused

> `private` **\_focused**: `boolean` = `false`

#### Source

[core/cell.module.ts:12](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L12)

***

### \_range

> `private` **\_range**: [`CellRange`](../interfaces/CellRange.md)

The range of the cell in rows and columns (and tubes in case of 3D).

#### Source

[core/cell.module.ts:20](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L20)

***

### \_selected

> `private` **\_selected**: `boolean` = `false`

#### Source

[core/cell.module.ts:13](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L13)

***

### userData

> **userData**: `any`

User data associated to this cell.

#### Implementation of

[`AbstractCell`](AbstractCell.md).[`userData`](AbstractCell.md#userdata)

#### Source

[core/cell.module.ts:10](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L10)

## Accessors

### boundingBox

> `get` **boundingBox**(): [`CellBounds`](../interfaces/CellBounds.md)

The cell's bounding box with top-left(-front) position and bottom-right-back one, as `row`, `column` and `depth`.

#### Returns

[`CellBounds`](../interfaces/CellBounds.md)

The cell's bounding box.

#### Source

[core/cell.module.ts:102](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L102)

***

### col

> `get` **col**(): `number`

This cell's `column`.

#### Returns

`number`

This cell's column in case of 2D array or 0.

#### Source

[core/cell.module.ts:61](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L61)

***

### depth

> `get` **depth**(): `number`

This cell's `depth`.

#### Returns

`number`

This cell's depth.

#### Source

[core/cell.module.ts:77](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L77)

***

### hasFocus

> `get` **hasFocus**(): `boolean`

The active status of the cell.

#### Returns

`boolean`

`true` if active.

#### Source

[core/cell.module.ts:121](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L121)

***

### height

> `get` **height**(): `number`

This cell's `height`.

#### Returns

`number`

This cell's height.

#### Source

[core/cell.module.ts:73](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L73)

***

### index

> `get` **index**(): [`CellIndex`](../interfaces/CellIndex.md)

This cell's upper-left position in the table, with `row`, `col` and `depth`.

#### Returns

[`CellIndex`](../interfaces/CellIndex.md)

The cell's upper-left(-front) position.

#### Source

[core/cell.module.ts:94](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L94)

***

### isSelected

> `get` **isSelected**(): `boolean`

The selection status of the cell.

#### Returns

`boolean`

`true` if selected.

#### Source

[core/cell.module.ts:117](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L117)

***

### range

> `get` **range**(): [`CellRange`](../interfaces/CellRange.md)

This cell's `range`.

#### Returns

[`CellRange`](../interfaces/CellRange.md)

This cell's range with `index` (row + column + tube) and `size` (width + height + depth in number of rows and columns and tubes).

#### Source

[core/cell.module.ts:81](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L81)

***

### row

> `get` **row**(): `number`

This cell's `row`.

#### Returns

`number`

#### Source

[core/cell.module.ts:57](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L57)

***

### size

> `get` **size**(): [`CellSize`](../interfaces/CellSize.md)

The cell's size, with `width` and `height` as number of columns and rows, and `depth` as number of tubes.

#### Returns

[`CellSize`](../interfaces/CellSize.md)

The size of the cell.

#### Source

[core/cell.module.ts:98](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L98)

***

### tube

> `get` **tube**(): `number`

This cell's `tube` in case of 3D array or 0.

#### Returns

`number`

This cell's tube.

#### Source

[core/cell.module.ts:65](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L65)

***

### width

> `get` **width**(): `number`

Get this cell's `width`.

#### Returns

`number`

This cell's width.

#### Source

[core/cell.module.ts:69](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L69)

## Methods

### blur()

> **blur**(): [`Cell`](Cell.md)

Remove focus from this cell.

#### Returns

[`Cell`](Cell.md)

This cell.

#### Implementation of

[`AbstractCell`](AbstractCell.md).[`blur`](AbstractCell.md#blur)

#### Source

[core/cell.module.ts:42](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L42)

***

### dispose()

> **dispose**(): `void`

Clean up the cell.

#### Returns

`void`

#### Implementation of

[`AbstractCell`](AbstractCell.md).[`dispose`](AbstractCell.md#dispose)

#### Source

[core/cell.module.ts:22](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L22)

***

### focus()

> **focus**(): [`Cell`](Cell.md)

Focus on this cell.

#### Returns

[`Cell`](Cell.md)

This cell.

#### Implementation of

[`AbstractCell`](AbstractCell.md).[`focus`](AbstractCell.md#focus)

#### Source

[core/cell.module.ts:37](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L37)

***

### select()

> **select**(): [`Cell`](Cell.md)

Select this cell.

#### Returns

[`Cell`](Cell.md)

This cell.

#### Implementation of

[`AbstractCell`](AbstractCell.md).[`select`](AbstractCell.md#select)

#### Source

[core/cell.module.ts:47](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L47)

***

### unselect()

> **unselect**(): [`Cell`](Cell.md)

Unselect this cell.

#### Returns

[`Cell`](Cell.md)

This cell.

#### Implementation of

[`AbstractCell`](AbstractCell.md).[`unselect`](AbstractCell.md#unselect)

#### Source

[core/cell.module.ts:52](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/core/cell.module.ts#L52)
