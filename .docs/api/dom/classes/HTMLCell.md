[cell-collection](../../modules.md) / [DOM](../index.md) / HTMLCell

# Class: HTMLCell

## Implements

- [`AbstractCell`](../../Core/classes/AbstractCell.md)

## Constructors

### new HTMLCell()

> **new HTMLCell**(`_element`, `_range`, `_options`): [`HTMLCell`](HTMLCell.md)

Represents a cell of a multidimensional array linked to an `HTMLElement`.

#### Parameters

• **\_element**: `HTMLElement`

The DOM element for this cell.

• **\_range**: [`CellRange`](../../Core/interfaces/CellRange.md)

The range of the cell in rows, columns (2D) and tubes (3D).

• **\_options**: [`HTMLCellOptions`](../interfaces/HTMLCellOptions.md)

The options to handle this cell.

#### Returns

[`HTMLCell`](HTMLCell.md)

#### Source

[dom/html-cell.module.ts:88](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L88)

## Properties

### \_addFocusedClass()

> `private` **\_addFocusedClass**: (`element`) => `void`

Function to add the 'focused' class passed in options on creation to cell's element.

#### Parameters

• **element**: `HTMLElement`

#### Returns

`void`

#### Source

[dom/html-cell.module.ts:69](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L69)

***

### \_addSelectedClass()

> `private` **\_addSelectedClass**: (`element`) => `void`

Function to add the 'selected' class passed in options on creation to cell's element.

#### Parameters

• **element**: `HTMLElement`

#### Returns

`void`

#### Source

[dom/html-cell.module.ts:65](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L65)

***

### \_element

> `private` **\_element**: `HTMLElement`

The DOM element for this cell.

#### Source

[dom/html-cell.module.ts:89](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L89)

***

### \_options

> `private` **\_options**: [`HTMLCellOptions`](../interfaces/HTMLCellOptions.md)

The options to handle this cell.

#### Source

[dom/html-cell.module.ts:91](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L91)

***

### \_pointerListener

> `private` **\_pointerListener**: `undefined` \| `EventListenerOrEventListenerObject`

The pointer listener attached to this cell.

#### Source

[dom/html-cell.module.ts:79](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L79)

***

### \_range

> `private` **\_range**: [`CellRange`](../../Core/interfaces/CellRange.md)

The range of the cell in rows, columns (2D) and tubes (3D).

#### Source

[dom/html-cell.module.ts:90](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L90)

***

### \_removeFocusedClass()

> `private` **\_removeFocusedClass**: (`element`) => `void`

#### Parameters

• **element**: `HTMLElement`

#### Returns

`void`

#### Source

[dom/html-cell.module.ts:74](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L74)

***

### \_removeSelectedClass()

> `private` **\_removeSelectedClass**: (`element`) => `void`

Function to remove a class from cell's element.

#### Parameters

• **element**: `HTMLElement`

#### Returns

`void`

#### Source

[dom/html-cell.module.ts:73](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L73)

***

### userData

> **userData**: `any`

User data associated to this cell.

#### Implementation of

[`AbstractCell`](../../Core/classes/AbstractCell.md).[`userData`](../../Core/classes/AbstractCell.md#userdata)

#### Source

[dom/html-cell.module.ts:61](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L61)

## Accessors

### boundingBox

> `get` **boundingBox**(): [`CellBounds`](../../Core/interfaces/CellBounds.md)

The cell's bounding box with top-left(-front) position and bottom-right-back one, as `row`, `column` and `depth`.

#### Returns

[`CellBounds`](../../Core/interfaces/CellBounds.md)

The cell's bounding box.

#### Source

[dom/html-cell.module.ts:233](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L233)

***

### col

> `get` **col**(): `number`

This cell's `column`.

#### Returns

`number`

This cell's column in case of 2D array or 0.

#### Source

[dom/html-cell.module.ts:192](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L192)

***

### depth

> `get` **depth**(): `number`

This cell's `depth`.

#### Returns

`number`

This cell's depth.

#### Source

[dom/html-cell.module.ts:208](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L208)

***

### element

> `get` **element**(): `HTMLElement`

Underlying `HTMLElement`of this cell in case it is used client-side.

#### Returns

`HTMLElement`

#### Source

[dom/html-cell.module.ts:184](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L184)

***

### hasFocus

> `get` **hasFocus**(): `boolean`

The active status of the cell.

#### Returns

`boolean`

`true` if active.

#### Source

[dom/html-cell.module.ts:252](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L252)

***

### height

> `get` **height**(): `number`

This cell's `height`.

#### Returns

`number`

This cell's height.

#### Source

[dom/html-cell.module.ts:204](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L204)

***

### index

> `get` **index**(): [`CellIndex`](../../Core/interfaces/CellIndex.md)

This cell's upper-left position in the table, with `row`, `col` and `depth`.

#### Returns

[`CellIndex`](../../Core/interfaces/CellIndex.md)

The cell's upper-left(-front) position.

#### Source

[dom/html-cell.module.ts:225](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L225)

***

### isSelected

> `get` **isSelected**(): `boolean`

The selection status of the cell.

#### Returns

`boolean`

`true` if selected.

#### Source

[dom/html-cell.module.ts:248](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L248)

***

### range

> `get` **range**(): [`CellRange`](../../Core/interfaces/CellRange.md)

This cell's `range`.

#### Returns

[`CellRange`](../../Core/interfaces/CellRange.md)

This cell's range with `index` (row + column + tube) and `size` (width + height + depth in number of rows and columns and tubes).

#### Source

[dom/html-cell.module.ts:212](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L212)

***

### row

> `get` **row**(): `number`

This cell's `row`.

#### Returns

`number`

#### Source

[dom/html-cell.module.ts:188](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L188)

***

### size

> `get` **size**(): [`CellSize`](../../Core/interfaces/CellSize.md)

The cell's size, with `width` and `height` as number of columns and rows, and `depth` as number of tubes.

#### Returns

[`CellSize`](../../Core/interfaces/CellSize.md)

The size of the cell.

#### Source

[dom/html-cell.module.ts:229](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L229)

***

### tube

> `get` **tube**(): `number`

This cell's `tube` in case of 3D array or 0.

#### Returns

`number`

This cell's tube.

#### Source

[dom/html-cell.module.ts:196](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L196)

***

### width

> `get` **width**(): `number`

Get this cell's `width`.

#### Returns

`number`

This cell's width.

#### Source

[dom/html-cell.module.ts:200](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L200)

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

[`AbstractCell`](../../Core/classes/AbstractCell.md).[`addPointerListener`](../../Core/classes/AbstractCell.md#addpointerlistener)

#### Source

[dom/html-cell.module.ts:166](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L166)

***

### blur()

> **blur**(): [`HTMLCell`](HTMLCell.md)

Remove focus from this cell.

#### Returns

[`HTMLCell`](HTMLCell.md)

This cell.

#### Implementation of

[`AbstractCell`](../../Core/classes/AbstractCell.md).[`blur`](../../Core/classes/AbstractCell.md#blur)

#### Source

[dom/html-cell.module.ts:151](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L151)

***

### dispose()

> **dispose**(): `void`

Clean up the cell.

#### Returns

`void`

#### Implementation of

[`AbstractCell`](../../Core/classes/AbstractCell.md).[`dispose`](../../Core/classes/AbstractCell.md#dispose)

#### Source

[dom/html-cell.module.ts:125](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L125)

***

### focus()

> **focus**(): [`HTMLCell`](HTMLCell.md)

Focus on this cell.

#### Returns

[`HTMLCell`](HTMLCell.md)

This cell.

#### Implementation of

[`AbstractCell`](../../Core/classes/AbstractCell.md).[`focus`](../../Core/classes/AbstractCell.md#focus)

#### Source

[dom/html-cell.module.ts:146](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L146)

***

### removePointerListener()

> **removePointerListener**(): `void`

Remove the previously added pointer listener.

#### Returns

`void`

#### Implementation of

[`AbstractCell`](../../Core/classes/AbstractCell.md).[`removePointerListener`](../../Core/classes/AbstractCell.md#removepointerlistener)

#### Source

[dom/html-cell.module.ts:174](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L174)

***

### select()

> **select**(): [`HTMLCell`](HTMLCell.md)

Select this cell.

#### Returns

[`HTMLCell`](HTMLCell.md)

This cell.

#### Implementation of

[`AbstractCell`](../../Core/classes/AbstractCell.md).[`select`](../../Core/classes/AbstractCell.md#select)

#### Source

[dom/html-cell.module.ts:156](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L156)

***

### unselect()

> **unselect**(): [`HTMLCell`](HTMLCell.md)

Unselect this cell.

#### Returns

[`HTMLCell`](HTMLCell.md)

This cell.

#### Implementation of

[`AbstractCell`](../../Core/classes/AbstractCell.md).[`unselect`](../../Core/classes/AbstractCell.md#unselect)

#### Source

[dom/html-cell.module.ts:161](https://github.com/benoitlahoz/cell-collection/blob/5791fd20336b799b0bbb60c03a9d6cc62829c651/src/dom/html-cell.module.ts#L161)
