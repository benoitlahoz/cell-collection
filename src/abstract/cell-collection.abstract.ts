import { CellCollection } from '../core/cell-collection.module';
import {
  AbstractCell,
  CellBounds,
  CellIndex,
  CellRange,
  CellSize,
} from './cell.abstract';

/**
 * An user callback passed to collection loop methods (e.g. `every`, `some`, ...).
 *
 * @property cell The current cell in the loop.
 * @property index The index of the current cell in the loop.
 * @property collection The collection being traversed.
 */
export type CellCollectionCallback = (
  cell: AbstractCell,
  index: number,
  collection: AbstractCellCollection
) => any;

/**
 * An abstract class that defines a model for implementing `CellCollection`.
 *
 * @abstract This class has no implementation.
 */
export abstract class AbstractCellCollection {
  /**
   * The number of cells in the collection.
   */
  public abstract length: number;
  /**
   * The first cell of the collection at 0 for row, column and tube.
   */
  public abstract firstCell: AbstractCell | undefined;
  /**
   * The last cell of the collection, at the end position for row, column and tube.
   */
  public abstract lastCell: AbstractCell | undefined;
  /**
   * Number of the first row.
   */
  public abstract firstRowNumber: number;
  /**
   * Number of the first column.
   */
  public abstract firstColumnNumber: number;
  /**
   * Number of the first tube.
   */
  public abstract firstTubeNumber: number;
  /**
   * Number of the last row.
   */
  public abstract lastRowNumber: number;
  /**
   * Number of the last column.
   */
  public abstract lastColumnNumber: number;
  /**
   * Number of the last tube.
   */
  public abstract lastTubeNumber: number;
  /**
   * Bounds with the first cell position and the last cell position.
   */
  public abstract bounds: CellBounds;
  /**
   * A new cells collection from the selected cells of this collection.
   *
   * @example
   * // ...
   * const cell = collection.select(0, 0, 0);
   * console.log(collection.selected.length) // 1
   */
  public abstract selected: AbstractCellCollection;
  /**
   * The focused cell.
   */
  public abstract focused: AbstractCell | undefined;
  /**
   * If cell collection is applying to DOM, the elements of this collection's cells.
   */
  public abstract elements?: Array<Element | undefined>;
  /**
   * An array of collections with 'lands' of contiguous selecteed cells of this collection.
   */
  public abstract selectionLands?: Array<AbstractCellCollection>;

  /**
   * Tear-down the collection.
   */
  public abstract dispose(): void;

  /**
   * Push one or more item at the end of the collection.
   *
   * @param { Array<AbstractCell> } items One or more `AbstractCell` objects.
   * @returns { number } The new length of the collection.
   */
  public abstract push(...items: AbstractCell[]): number;

  /**
   * Insert one or more item at the beginning of the collection.
   *
   * @param { Array<AbstractCell> } items One or more `AbstractCell` objects.
   * @returns { number } The new length of the collection.
   */
  public abstract unshift(...items: AbstractCell[]): number;

  /**
   * Remove the first cell of the collection.
   *
   * @returns { AbstractCell | undefined } The removed cell or undefined if it was not found.
   */
  public abstract shift(): AbstractCell | undefined;

  /**
   * Remove the last cell of the collection.
   *
   * @returns { AbstractCell | undefined } The removed cell or undefined if it was not found.
   */
  public abstract pop(): AbstractCell | undefined;

  /**
   * Get the index of a specific cell in this collection.
   *
   * @param { AbstractCell } cell The cell to get the index of.
   * @param { number } fromIndex Begin searching index from this index.
   * @returns { number } The index of the cell.
   */
  public abstract indexOf(cell: AbstractCell, fromIndex?: number): number;

  /**
   * Get a subset of this collection from a range.
   *
   * @param { CellRange } range The range to gett from the collection.
   * @returns { AbstractCellCollection } A subset of this collection in a new collection.
   */
  public abstract in(range: CellRange): AbstractCellCollection;
  /**
   * Get a new cell collection from bounds in this collection.
   *
   * @param { CellBounds } bounds The boundaries of the subset.
   * @returns { AbstractCellCollection } A subset of this collection in a new collection.
   */
  public abstract in(bounds: CellBounds): AbstractCellCollection;
  /**
   * Get a new cell collection between two cells of this collection.
   *
   * @param { AbstractCell } begin The first cell to extract.
   * @param { AbstractCell } end The last cell to extract.
   * @returns { AbstractCellCollection } A subset of this collection in a new collection.
   */
  public abstract in(
    begin: AbstractCell,
    end: AbstractCell
  ): AbstractCellCollection;
  /**
   * Get a new cell collection between two cells positions in this collection.
   *
   * @param { CellIndex } begin The position of the first cell to extract.
   * @param { CellIndex } end The position of the last cell to extract.
   * @returns { AbstractCellCollection } A subset of this collection in a new collection.
   */
  public abstract in(begin: CellIndex, end: CellIndex): AbstractCellCollection;
  /**
   * Get a new cell collection with a cell index and a size.
   *
   * @param { CellIndex } index The index of the first cell to extract.
   * @param { CellSize } size The size to extract from the index.
   * @returns { AbstractCellCollection } A subset of this collection in a new collection.
   */
  public abstract in(index: CellIndex, size: CellSize): AbstractCellCollection;
  public abstract in(
    ...args: (CellRange | CellBounds | AbstractCell | CellIndex | CellSize)[]
  ): AbstractCellCollection;

  /**
   * Returns `true` if this collection contains the given cell.
   *
   * @param { AbstractCell } cell
   * @returns { boolean } `true` if this collection contains the cell.
   */
  public abstract has(cell?: AbstractCell): boolean;
  /**
   * Returns `true` if this collection contains a cell with given row, column and eventually tube numbers.
   *
   * @param { number } row The row number to test.
   * @param { number } col The column number to test.
   * @param { number | undefined } tube The tube number to test.
   * @returns { boolean } `true` if this collection contains the cell at position.
   */
  public abstract has(row: number, col: number, tube?: number): boolean;
  /**
   * Returns `true` if this collection has a cell at given index.
   *
   * @param { CellIndex } index The index to test.
   * @returns { boolean } `true` if this collection contains a cell at given index.
   */
  public abstract has(index: CellIndex): boolean;
  public abstract has(
    ...args: (AbstractCell | number | undefined | CellIndex)[]
  ): boolean;

  /**
   * Returns the cell at given position.
   *
   * @param { number } row The row number of the cell.
   * @param { number | undefined } col The column number of the cell.
   * @param { number | undefined } tube The tube number of the cell.
   * @returns { AbstractCell | undefined } The cell at given position or `undefined` if it does not exist.
   */
  public abstract at(
    row: number,
    col?: number,
    tube?: number
  ): AbstractCell | undefined;

  /**
   * Shuffle the cells.
   *
   * @returns { CellCollection } A new collection with shuffled cells.
   */
  public abstract shuffle(): CellCollection;

  /**
   * If a comparison function is provided, sort the cells with it,
   * otherwise sort the cells by row, column and tube ascending.
   *
   * @param { (a: AbstractCell, b: AbstractCell) => number | undefined } compareFn A comparison function to sort the collection.
   * @returns { AbstractCellCollection } A new sorted collection.
   */
  public abstract sort(
    compareFn?: (a: AbstractCell, b: AbstractCell) => number
  ): AbstractCellCollection;

  /**
   * Sort the cells by row, column and tube descending.
   *
   * @returns { AbstractCellCollection } A new sorted collection.
   */
  public abstract sortReverse(): AbstractCellCollection;

  /**
   * Returns `true` if all cells of this collection conform to provided test function.
   *
   * @param { CellCollectionCallback } callback The user provided callback.
   * @returns { boolean } `true` if all cells of this collection conform to provided test function.
   */
  public abstract every(callback: CellCollectionCallback): boolean;

  /**
   * Returns `true` if at least one cell of this collection conforms to provided test function.
   *
   * @param { CellCollectionCallback } callback The user provided callback.
   * @returns { boolean } `true` if at least one cell of this collection conforms to provided test function.
   */
  public abstract some(callback: CellCollectionCallback): boolean;

  /**
   * Apply a function to all cells of this collection.
   *
   * @param { CellCollectionCallback } callback The function to apply to each cell of this collection.
   */
  public abstract forEach(callback: CellCollectionCallback): void;

  /**
   * Return an `Array` populated with the result of calling provided function to each cell.
   *
   * @param { CellCollectionCallback } callback The function to apply to each cell of this collection.
   * @returns { Array<any> } An array resulting of the function.
   */
  public abstract map(callback: CellCollectionCallback): Array<any>;
  /**
   * Try to find a cell given a test function.
   *
   * @param { CellCollectionCallback } callback The test function to find a cell.
   * @returns { AbstractCell | undefined } A cell if found or `undefined`.
   */
  public abstract find(
    callback: CellCollectionCallback
  ): AbstractCell | undefined;

  /**
   * Given a cell, get the cell at next row.
   *
   * @param { AbstractCell | undefined } from The cell to begin the move from or `undefined`:
   * testing the parameter and the return value is left to the implementation.
   * @returns { AbstractCell | undefined } The cell at next row, in same column and tube, or `undefined` if not found.
   */
  public abstract down(from?: AbstractCell): AbstractCell | undefined;

  /**
   * Given a cell, get the cell at previous row.
   *
   * @param { AbstractCell | undefined } from The cell to begin the move from or `undefined`:
   * testing the parameter and the return value is left to the implementation.
   * @returns { AbstractCell | undefined } The cell at previous row, in same column and tube, or `undefined` if not found.
   */
  public abstract up(from?: AbstractCell): AbstractCell | undefined;

  /**
   * Given a cell, get the cell at next column.
   *
   * @param { AbstractCell | undefined } from The cell to begin the move from or `undefined`:
   * testing the parameter and the return value is left to the implementation.
   * @returns { AbstractCell | undefined } The cell at next column, in same row and tube, or `undefined` if not found.
   */
  public abstract right(from?: AbstractCell): AbstractCell | undefined;

  /**
   * Given a cell, get the cell at previous column.
   *
   * @param { AbstractCell | undefined } from The cell to begin the move from or `undefined`:
   * testing the parameter and the return value is left to the implementation.
   * @returns { AbstractCell | undefined } The cell at previous column, in same row and tube, or `undefined` if not found.
   */
  public abstract left(from?: AbstractCell): AbstractCell | undefined;

  /**
   * Given a cell, get the cell at next tube.
   *
   * @param { AbstractCell | undefined } from The cell to begin the move from or `undefined`:
   * testing the parameter and the return value is left to the implementation.
   * @returns { AbstractCell | undefined } The cell at next tube, in same row and column, or `undefined` if not found.
   */
  public abstract back(from?: AbstractCell): AbstractCell | undefined;

  /**
   * Given a cell, get the cell at previous tube.
   *
   * @param { AbstractCell | undefined } from The cell to begin the move from or `undefined`:
   * testing the parameter and the return value is left to the implementation.
   * @returns { AbstractCell | undefined } The cell at previous tube, in same row and column, or `undefined` if not found.
   */
  public abstract front(from?: AbstractCell): AbstractCell | undefined;

  /**
   * Filter cells with a test function.
   *
   * @param { CellCollectionCallback } callback The test function to filter the collection.
   * @returns { AbstractCellCollection } A new collection with the filtered cells.
   */
  public abstract filter(
    callback: CellCollectionCallback
  ): AbstractCellCollection;

  /**
   * Get all cells in a row.
   *
   * @param { number } row The number of the row to get cells from.
   * @returns { AbstractCellCollection } A new collection with cells at given row.
   */
  public abstract filterByRow(row: number): AbstractCellCollection;

  /**
   * Get all cells in a column.
   *
   * @param { number } col The number of the column to get cells from.
   * @returns { AbstractCellCollection } A new collection with cells at given column.
   */
  public abstract filterByColumn(col: number): AbstractCellCollection;

  /**
   * Get all cells in a tube.
   *
   * @param { number } tube The number of the tube to get cells from.
   * @returns { AbstractCellCollection } A new collection with cells at given tube.
   */
  public abstract filterByTube(tube: number): AbstractCellCollection;

  /**
   * Clears the collection.
   */
  public abstract clear(): void;

  /**
   * Get the collection entries.
   *
   * @returns { IterableIterator<[number, AbstractCell]> } An iterrator on the collection's entries.
   */
  public abstract entries(): IterableIterator<[number, AbstractCell]>;

  /**
   * Get the collection values.
   *
   * @returns { IterableIterator<AbstractCell> } An iterrator on the collection's values.
   */
  public abstract values(): IterableIterator<AbstractCell>;

  /**
   * Get the collection keys.
   *
   * @returns { IterableIterator<number> } An iterrator on the collection's keys.
   */
  public abstract keys(): IterableIterator<number>;

  /**
   * Get the collection as a unidimensional `Array` of cells.
   *
   * @returns { Array<AbstractCell> } An array of cells.
   */
  public abstract toArray(): Array<AbstractCell>;

  /**
   * Get the collection as a unidimensional `Set` of cells.
   *
   * @returns { Set<AbstractCell> } A set of cells.
   */
  public abstract toSet(): Set<AbstractCell>;

  /**
   * Concatenate (union) two collections and return a new collection.
   *
   * @param { AbstractCellCollection } collection The collection to add to this one.
   * @returns { AbstractCellCollection } A new collection with cells from both.
   */
  public abstract concat(collection: CellCollection): CellCollection;

  /**
   * Computes intersection between two collections.
   *
   * @param { AbstractCellCollection } collection The collection to compute intersection with.
   * @returns { AbstractCellCollection } A new cell collection with intersection of this collection and the provided one
   * (cells that are present in both collections).
   */
  public abstract intersection(
    collection: AbstractCellCollection
  ): AbstractCellCollection;

  /**
   * Computes the difference between two collections and return a new collection.
   *
   * @param { AbstractCellCollection } collection The collection to compute difference with this one.
   * @returns { AbstractCellCollection } A new collection with difference (cells of `collection`
   * that are only present in this collection).
   */
  public abstract difference(collection: CellCollection): CellCollection;

  /**
   * Computes the symmetric difference (exclusive or) between two collections.
   *
   * @param { AbstractCellCollection } collection The collection to compute symmetric difference with this one.
   * @returns { AbstractCellCollection } A new collection with symmetric difference (cells of `collection`
   * that are not present in this collection, and cells of this collection that are not present in `collection`).
   */
  public abstract xor(collection: CellCollection): CellCollection;

  /**
   * Mark all cells of this collection as selected.
   *
   * @returns { AbstractCellCollection } A new collection as selection.
   */
  public abstract select(): AbstractCellCollection;
  /**
   * Mark a cell as selected.
   *
   * @param { AbstractCell } cell The cell to select.
   * @returns { AbstractCell | undefined } The selected cell or `undefined` if it was not found.
   */
  public abstract select(
    cell?: AbstractCell | undefined
  ): AbstractCell | undefined;
  /**
   * Mark the cell at given position as selected.
   *
   * @param { number } row The row of the cell to select.
   * @param { number | undefined } col The column of the cell to select.
   * @param { number | undefined } tube The tube of the cell to select.
   * @returns { AbstractCell | undefined } The selected cell or `undefined` if it was not found.
   */
  public abstract select(
    row: number,
    col?: number,
    tube?: number
  ): AbstractCell | undefined;
  /**
   * Mark the cell at given index as selected.
   *
   * @param { CellIndex } index The index of the cell to select.
   * @returns { AbstractCell | undefined } The selected cell or `undefined` if it was not found.
   */
  public abstract select(index: CellIndex): AbstractCell | undefined;
  public abstract select(
    ...args: (AbstractCell | number | CellIndex | undefined)[]
  ): AbstractCell | AbstractCellCollection | undefined;

  /**
   * Mark all cells of this collection as unselected.
   *
   * @returns { AbstractCellCollection } A new collection as selection.
   */
  public abstract unselect(): AbstractCellCollection;
  /**
   * Mark a cell as unselected.
   *
   * @param { AbstractCell } cell The cell to unselect.
   * @returns { AbstractCell } The unselected cell or undefined if it was not found.
   */
  public abstract unselect(cell?: AbstractCell): AbstractCell | undefined;
  /**
   * Mark a cell at given position as unselected.
   *
   * @param { number } row The row of the cell to unselect.
   * @param { number | undefined } col The column of the cell to unselect.
   * @param { number | undefined } tube The tube of the cell to unselect.
   * @returns { AbstractCell } The unselected cell or undefined if it was not found.
   */
  public abstract unselect(
    row: number,
    col?: number,
    tube?: number
  ): AbstractCell | undefined;
  /**
   *
   * @param { CellIndex } index The index of the cell to unselect.
   * @returns { AbstractCell } The unselected cell or undefined if it was not found.
   */
  public abstract unselect(index: CellIndex): AbstractCell | undefined;
  public abstract unselect(
    ...args: (AbstractCell | number | CellIndex | undefined)[]
  ): AbstractCell | AbstractCellCollection | undefined;

  /**
   * Mark the first cell of the collection as focused and all other cells as blurred.
   *
   * @returns { AbstractCell | undefined } The focused cell or `undefined` if the collection is empty.
   */
  public abstract focus(): AbstractCell | undefined;
  /**
   * Mark a cell as focused and all other cells as blurred.
   *
   * @param { AbstractCell } cell The cell to focus.
   * @returns { AbstractCell | undefined } The focused cell or `undefined` if the collection is empty.
   */
  public abstract focus(
    cell?: AbstractCell | undefined
  ): AbstractCell | undefined;
  /**
   * Mark a cell as focused and all other cells as blurred.
   *
   * @param { number } row The row of the cell to focus.
   * @param { number | undefined } col The column of the cell to focus.
   * @param { number | undefined } tube The tube of the cell to focus.
   * @returns { AbstractCell | undefined } The focused cell or `undefined` if the collection is empty.
   */
  public abstract focus(
    row: number,
    col?: number,
    tube?: number
  ): AbstractCell | undefined;
  /**
   * Mark the cell at given index as focused.
   *
   * @param { CellIndex } index The index of the cell to focus.
   * @returns { AbstractCell | undefined } The focused cell or `undefined` if the collection is empty.
   */
  public abstract focus(index: CellIndex): AbstractCell | undefined;
  public abstract focus(
    ...args: (AbstractCell | number | CellIndex | undefined)[]
  ): AbstractCell | undefined;

  /**
   * Blur all cells of this collection (there should be none or only one).
   *
   * @returns { AbstractCell | undefined } The blurred cell or `undefined` if no cell was focused.
   */
  public abstract blur(): AbstractCell | undefined;
  /**
   * Blur a specific cell.
   *
   * @param { AbstractCell } cell The cell to blur.
   * @returns { AbstractCell } The passed cell.
   */
  public abstract blur(cell?: AbstractCell): AbstractCell;
  /**
   * Blur a cell at given position.
   *
   * @param { number } row The row of the cell to blur.
   * @param { number | undefined } col The column of the cell to blur.
   * @param { number | undefined } tube The tube of the cell to blur.
   * @returns { AbstractCell | undefined } The blurred cell or `undefined` if the cell was not found.
   */
  public abstract blur(
    row: number,
    col?: number,
    tube?: number
  ): AbstractCell | undefined;
  /**
   * Blur a cell at given index.
   *
   * @param { CellIndex } index The index of the cell to blur.
   * @returns { AbstractCell | undefined } The blurred cell or `undefined` if the cell was not found.
   */
  public abstract blur(index: CellIndex): AbstractCell | undefined;
  public abstract blur(
    ...args: (AbstractCell | number | CellIndex | undefined)[]
  ): AbstractCell | AbstractCellCollection | undefined;

  /**
   * Allows iterating over cells with 'for... of...' loop.
   *
   * @returns { AbstractCell } A cell object.
   *
   * @example
   * // Iterate over cells.
   *
   * for (const cell of myCellCollection) {
   *   console.log(cell)
   * }
   */
  public abstract [Symbol.iterator](): any;
}
