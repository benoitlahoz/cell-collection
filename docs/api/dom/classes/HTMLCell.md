[cell-collection](../../modules.md) / [dom](../index.md) / HTMLCell

# Class: HTMLCell

## Implements

- [`AbstractCell`](../../core/classes/AbstractCell.md)

## Constructors

### new HTMLCell()

> **new HTMLCell**(`_element`, `_range`, `_options`): [`HTMLCell`](HTMLCell.md)

Represents a cell of a multidimensional array linked to an `HTMLElement`.

#### Parameters

• **\_element**: `HTMLElement`

The DOM element for this cell.

• **\_range**: [`CellRange`](../../core/interfaces/CellRange.md)

The range of the cell in rows and columns (and tubes in case of 3D).

• **\_options**: [`HTMLCellOptions`](../interfaces/HTMLCellOptions.md)

The options to handle this cell.

#### Returns

[`HTMLCell`](HTMLCell.md)

#### Source

[dom/html-cell.module.ts:90](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L90)

## Properties

### \_addFocusedClass()

> `private` **\_addFocusedClass**: (`element`) => `void`

Function to add the 'focused' class passed in options on creation to cell's element.

#### Parameters

• **element**: `HTMLElement`

#### Returns

`void`

#### Source

[dom/html-cell.module.ts:71](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L71)

***

### \_addSelectedClass()

> `private` **\_addSelectedClass**: (`element`) => `void`

Function to add the 'selected' class passed in options on creation to cell's element.

#### Parameters

• **element**: `HTMLElement`

#### Returns

`void`

#### Source

[dom/html-cell.module.ts:66](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L66)

***

### \_element

> `private` **\_element**: `HTMLElement`

The DOM element for this cell.

#### Source

[dom/html-cell.module.ts:91](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L91)

***

### \_options

> `private` **\_options**: [`HTMLCellOptions`](../interfaces/HTMLCellOptions.md)

The options to handle this cell.

#### Source

[dom/html-cell.module.ts:93](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L93)

***

### \_pointerListener

> `private` **\_pointerListener**: `undefined` \| `EventListenerOrEventListenerObject`

The pointer listener attached to this cell.

#### Source

[dom/html-cell.module.ts:81](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L81)

***

### \_range

> `private` **\_range**: [`CellRange`](../../core/interfaces/CellRange.md)

The range of the cell in rows and columns (and tubes in case of 3D).

#### Source

[dom/html-cell.module.ts:92](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L92)

***

### \_removeFocusedClass()

> `private` **\_removeFocusedClass**: (`element`) => `void`

#### Parameters

• **element**: `HTMLElement`

#### Returns

`void`

#### Source

[dom/html-cell.module.ts:76](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L76)

***

### \_removeSelectedClass()

> `private` **\_removeSelectedClass**: (`element`) => `void`

Function to remove a class from cell's element.

#### Parameters

• **element**: `HTMLElement`

#### Returns

`void`

#### Source

[dom/html-cell.module.ts:75](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L75)

***

### userData

> **userData**: `any`

User data associated to this cell.

#### Implementation of

[`AbstractCell`](../../core/classes/AbstractCell.md).[`userData`](../../core/classes/AbstractCell.md#userdata)

#### Source

[dom/html-cell.module.ts:61](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L61)

## Accessors

### boundingBox

> `get` **boundingBox**(): [`CellBounds`](../../core/interfaces/CellBounds.md)

The cell's bounding box with top-left(-front) position and bottom-right(-back) one, as `row` and `column` (and `depth`).

#### Returns

[`CellBounds`](../../core/interfaces/CellBounds.md)

The cell's bounding box.

#### Source

[dom/html-cell.module.ts:235](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L235)

***

### col

> `get` **col**(): `number`

This cell's `column`.

#### Returns

`number`

This cell's column.

#### Source

[dom/html-cell.module.ts:194](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L194)

***

### depth

> `get` **depth**(): `number`

This cell's `depth` in case of 3D array.

#### Returns

`number`

This cell's depth.

#### Source

[dom/html-cell.module.ts:210](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L210)

***

### element

> `get` **element**(): `HTMLElement`

Underlying `HTMLElement`of this cell in case it is used client-side.

#### Returns

`HTMLElement`

#### Source

[dom/html-cell.module.ts:186](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L186)

***

### hasFocus

> `get` **hasFocus**(): `boolean`

The active status of the cell.

#### Returns

`boolean`

`true` if active.

#### Source

[dom/html-cell.module.ts:254](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L254)

***

### height

> `get` **height**(): `number`

This cell's `height`.

#### Returns

`number`

This cell's height.

#### Source

[dom/html-cell.module.ts:206](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L206)

***

### index

> `get` **index**(): [`CellIndex`](../../core/interfaces/CellIndex.md)

This cell's upper-left position in the table, with `row` and `col` (and eventually `depth`)).

#### Returns

[`CellIndex`](../../core/interfaces/CellIndex.md)

The cell's upper-left(-front) position.

#### Source

[dom/html-cell.module.ts:227](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L227)

***

### isSelected

> `get` **isSelected**(): `boolean`

The selection status of the cell.

#### Returns

`boolean`

`true` if selected.

#### Source

[dom/html-cell.module.ts:250](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L250)

***

### range

> `get` **range**(): [`CellRange`](../../core/interfaces/CellRange.md)

This cell's `range`.

#### Returns

[`CellRange`](../../core/interfaces/CellRange.md)

This cell's range with `index` (row + column + tube) and `size` (width + height + depth in number of rows and columns and tubes).

#### Source

[dom/html-cell.module.ts:214](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L214)

***

### row

> `get` **row**(): `number`

This cell's `row`.

#### Returns

`number`

#### Source

[dom/html-cell.module.ts:190](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L190)

***

### size

> `get` **size**(): [`CellSize`](../../core/interfaces/CellSize.md)

The cell's size, with `width` and `height` as number of columns and rows (and `depth` as number of tubes).

#### Returns

[`CellSize`](../../core/interfaces/CellSize.md)

The size of the cell.

#### Source

[dom/html-cell.module.ts:231](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L231)

***

### tube

> `get` **tube**(): `number`

This cell's `tube` in case of 3D array or 0.

#### Returns

`number`

This cell's tube.

#### Source

[dom/html-cell.module.ts:198](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L198)

***

### width

> `get` **width**(): `number`

Get this cell's `width`.

#### Returns

`number`

This cell's width.

#### Source

[dom/html-cell.module.ts:202](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L202)

## Methods

### addPointerListener()

> **addPointerListener**(`listener`): `void`

Add a listener to the channel passed as pointer event in options.

#### Parameters

• **listener**: `EventListener`

The listener called when the pointer event is emitted.

#### Returns

`void`

#### Implementation of

[`AbstractCell`](../../core/classes/AbstractCell.md).[`addPointerListener`](../../core/classes/AbstractCell.md#addpointerlistener)

#### Source

[dom/html-cell.module.ts:168](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L168)

***

### blur()

> **blur**(): [`HTMLCell`](HTMLCell.md)

Remove focus from this cell.

#### Returns

[`HTMLCell`](HTMLCell.md)

This cell.

#### Implementation of

[`AbstractCell`](../../core/classes/AbstractCell.md).[`blur`](../../core/classes/AbstractCell.md#blur)

#### Source

[dom/html-cell.module.ts:153](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L153)

***

### dispose()

> **dispose**(): `void`

Clean up the cell.

#### Returns

`void`

#### Implementation of

[`AbstractCell`](../../core/classes/AbstractCell.md).[`dispose`](../../core/classes/AbstractCell.md#dispose)

#### Source

[dom/html-cell.module.ts:127](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L127)

***

### focus()

> **focus**(): [`HTMLCell`](HTMLCell.md)

Focus on this cell.

#### Returns

[`HTMLCell`](HTMLCell.md)

This cell.

#### Implementation of

[`AbstractCell`](../../core/classes/AbstractCell.md).[`focus`](../../core/classes/AbstractCell.md#focus)

#### Source

[dom/html-cell.module.ts:148](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L148)

***

### removePointerListener()

> **removePointerListener**(): `void`

Remove the previously added pointer listener.

#### Returns

`void`

#### Implementation of

[`AbstractCell`](../../core/classes/AbstractCell.md).[`removePointerListener`](../../core/classes/AbstractCell.md#removepointerlistener)

#### Source

[dom/html-cell.module.ts:176](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L176)

***

### select()

> **select**(): [`HTMLCell`](HTMLCell.md)

Select this cell.

#### Returns

[`HTMLCell`](HTMLCell.md)

This cell.

#### Implementation of

[`AbstractCell`](../../core/classes/AbstractCell.md).[`select`](../../core/classes/AbstractCell.md#select)

#### Source

[dom/html-cell.module.ts:158](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L158)

***

### unselect()

> **unselect**(): [`HTMLCell`](HTMLCell.md)

Unselect this cell.

#### Returns

[`HTMLCell`](HTMLCell.md)

This cell.

#### Implementation of

[`AbstractCell`](../../core/classes/AbstractCell.md).[`unselect`](../../core/classes/AbstractCell.md#unselect)

#### Source

[dom/html-cell.module.ts:163](https://github.com/benoitlahoz/cell-collection/blob/4d8f426cecceb2df9479d4634b0ab8850eb4c66f/src/dom/html-cell.module.ts#L163)
