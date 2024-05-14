[cell-collection](../../modules.md) / [Core](../index.md) / AbstractCell

# Class: `abstract` AbstractCell

## Constructors

### new AbstractCell()

> **new AbstractCell**(): [`AbstractCell`](AbstractCell.md)

#### Returns

[`AbstractCell`](AbstractCell.md)

## Properties

### boundingBox

> `abstract` **boundingBox**: [`CellBounds`](../interfaces/CellBounds.md)

The cell's bounding box with top-left(-front) position and bottom-right-back one, as `row`, `column` and `depth`.

#### Source

[abstract/cell.abstract.ts:140](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L140)

***

### col

> `abstract` **col**: `number`

This cell's `column`.

#### Source

[abstract/cell.abstract.ts:84](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L84)

***

### depth

> `abstract` **depth**: `number`

This cell's `depth`.

#### Source

[abstract/cell.abstract.ts:112](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L112)

***

### element?

> `optional` `abstract` **element**: `HTMLElement`

Underlying `HTMLElement`of this cell in case it is used client-side.

#### Source

[abstract/cell.abstract.ts:72](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L72)

***

### hasFocus

> `abstract` **hasFocus**: `boolean`

The active status of the cell.

#### Source

[abstract/cell.abstract.ts:154](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L154)

***

### height

> `abstract` **height**: `number`

This cell's `height`.

#### Source

[abstract/cell.abstract.ts:105](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L105)

***

### index

> `abstract` **index**: [`CellIndex`](../interfaces/CellIndex.md)

This cell's upper-left position in the table, with `row`, `col` and `depth`.

#### Source

[abstract/cell.abstract.ts:126](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L126)

***

### isSelected

> `abstract` **isSelected**: `boolean`

The selection status of the cell.

#### Source

[abstract/cell.abstract.ts:147](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L147)

***

### range

> `abstract` **range**: [`CellRange`](../interfaces/CellRange.md)

This cell's `range`.

#### Source

[abstract/cell.abstract.ts:119](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L119)

***

### row

> `abstract` **row**: `number`

This cell's `row`.

#### Source

[abstract/cell.abstract.ts:77](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L77)

***

### size

> `abstract` **size**: [`CellSize`](../interfaces/CellSize.md)

The cell's size, with `width` and `height` as number of columns and rows, and `depth` as number of tubes.

#### Source

[abstract/cell.abstract.ts:133](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L133)

***

### tube

> `abstract` **tube**: `number`

This cell's `tube` in case of 3D array or 0.

#### Source

[abstract/cell.abstract.ts:91](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L91)

***

### userData

> `abstract` **userData**: `any`

User data associated to this cell.

#### Source

[abstract/cell.abstract.ts:159](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L159)

***

### width

> `abstract` **width**: `number`

Get this cell's `width`.

#### Source

[abstract/cell.abstract.ts:98](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L98)

## Methods

### addPointerListener()?

> `optional` `abstract` **addPointerListener**(`listener`): `void`

Add a listener to the channel passed as pointer event in options.

#### Parameters

• **listener**: `EventListener`

The listener called when the pointer event is emitted.

#### Returns

`void`

#### Source

[abstract/cell.abstract.ts:62](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L62)

***

### blur()

> `abstract` **blur**(): [`AbstractCell`](AbstractCell.md)

Remove focus from this cell.

#### Returns

[`AbstractCell`](AbstractCell.md)

This cell.

#### Source

[abstract/cell.abstract.ts:41](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L41)

***

### dispose()

> `abstract` **dispose**(): `void`

Clean up the cell.

#### Returns

`void`

#### Source

[abstract/cell.abstract.ts:27](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L27)

***

### focus()

> `abstract` **focus**(): [`AbstractCell`](AbstractCell.md)

Focus on this cell.

#### Returns

[`AbstractCell`](AbstractCell.md)

This cell.

#### Source

[abstract/cell.abstract.ts:34](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L34)

***

### removePointerListener()?

> `optional` `abstract` **removePointerListener**(): `void`

Remove the previously added pointer listener.

#### Returns

`void`

#### Source

[abstract/cell.abstract.ts:67](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L67)

***

### select()

> `abstract` **select**(): [`AbstractCell`](AbstractCell.md)

Select this cell.

#### Returns

[`AbstractCell`](AbstractCell.md)

This cell.

#### Source

[abstract/cell.abstract.ts:48](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L48)

***

### unselect()

> `abstract` **unselect**(): [`AbstractCell`](AbstractCell.md)

Unselect this cell.

#### Returns

[`AbstractCell`](AbstractCell.md)

This cell.

#### Source

[abstract/cell.abstract.ts:55](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L55)

***

### `[hasInstance]`()

> `static` **\[hasInstance\]**(`instance`): `instance is AbstractCell`

Overrides 'instanceof' behavior.

#### Parameters

• **instance**: `unknown`

#### Returns

`instance is AbstractCell`

#### Source

[abstract/cell.abstract.ts:164](https://github.com/benoitlahoz/cell-collection/blob/c39a2ad5a7f0fcaf2652a3215b8e2330f8dcfb70/src/abstract/cell.abstract.ts#L164)
