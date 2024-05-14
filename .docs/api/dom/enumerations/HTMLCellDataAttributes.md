[cell-collection](../../modules.md) / [DOM](../index.md) / HTMLCellDataAttributes

# Enumeration: HTMLCellDataAttributes

Data attributes automatically applied by `HTMLCell` to its underlying `Element` to help finding
which element belongs to each position, starting from the element itself.

## Example

```html
<div data-cell-row="0" data-cell-col="0" data-cell-width="1" data-cell-height="1"></div>
```

```typescript
const row = parseInt(element.dataset['cell-row']);
const col = parseInt(element.dataset['cell-col']);

console.log(collection.has(row, col)); // true
```

## Enumeration Members

### Col

> **Col**: `"data-cell-col"`

The data attributes applied to `HTMLCell`'s element with its column number.

#### Source

[dom/html-cell.module.ts:41](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/dom/html-cell.module.ts#L41)

***

### Depth

> **Depth**: `"data-cell-depth"`

The data attributes applied to `HTMLCell`'s element with its depth in tubes.

#### Source

[dom/html-cell.module.ts:45](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/dom/html-cell.module.ts#L45)

***

### Height

> **Height**: `"data-cell-height"`

The data attributes applied to `HTMLCell`'s element with its height in rows.

#### Source

[dom/html-cell.module.ts:44](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/dom/html-cell.module.ts#L44)

***

### Row

> **Row**: `"data-cell-row"`

The data attributes applied to `HTMLCell`'s element with its row number.

#### Source

[dom/html-cell.module.ts:40](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/dom/html-cell.module.ts#L40)

***

### Tube

> **Tube**: `"data-cell-tube"`

The data attributes applied to `HTMLCell`'s element with its tube number.

#### Source

[dom/html-cell.module.ts:42](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/dom/html-cell.module.ts#L42)

***

### Width

> **Width**: `"data-cell-width"`

The data attributes applied to `HTMLCell`'s element with its width in columns.

#### Source

[dom/html-cell.module.ts:43](https://github.com/benoitlahoz/cell-collection/blob/0946bc3b2fdc5f73e1e8cc4664c5e944d8bb875a/src/dom/html-cell.module.ts#L43)
