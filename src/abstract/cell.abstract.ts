export interface CellIndex {
  row: number;
  col: number;
  tube?: number;
}

export interface CellSize {
  width: number;
  height: number;
  depth?: number;
}

export interface CellRange {
  index: CellIndex;
  size: CellSize;
}

export interface CellPixelsRange {
  index: CellIndex;
  size: CellSize;
}

export interface CellBounds {
  begin: CellIndex;
  end: CellIndex;
}

export abstract class AbstractCell {
  /**
   * Clean up the cell.
   */
  public abstract dispose(): void;

  /**
   * Focus on this cell.
   *
   * @returns { AbstractCell } This cell.
   */
  public abstract focus(): AbstractCell;

  /**
   * Remove focus from this cell.
   *
   * @returns { AbstractCell } This cell.
   */
  public abstract blur(): AbstractCell;

  /**
   * Select this cell.
   *
   * @returns { AbstractCell } This cell.
   */
  public abstract select(): AbstractCell;

  /**
   * Unselect this cell.
   *
   * @returns { AbstractCell } This cell.
   */
  public abstract unselect(): AbstractCell;

  /**
   * Add a listener to the channel passed as pointer event in options.
   *
   * @param { EventListener } listener The listener called when the pointer event is emitted.
   */
  public abstract addPointerListener?(listener: EventListener): void;

  /**
   * Remove the previously added pointer listener.
   */
  public abstract removePointerListener?(): void;

  /**
   * Underlying `HTMLElement`of this cell in case it is used client-side.
   */
  public abstract element?: HTMLElement;

  /**
   * This cell's `row`.
   */
  public abstract row: number;

  /**
   * This cell's `column`.
   *
   * @returns { number } This cell's column.
   */
  public abstract col: number;

  /**
   * This cell's `tube` in case of 3D array or 0.
   *
   * @returns { number } This cell's tube.
   */
  public abstract tube: number;

  /**
   * Get this cell's `width`.
   *
   * @returns { number } This cell's width.
   */
  public abstract width: number;

  /**
   * This cell's `height`.
   *
   * @returns { number } This cell's height.
   */
  public abstract height: number;

  /**
   * This cell's `depth` in case of 3D array.
   *
   * @returns { number } This cell's depth.
   */
  public abstract depth: number;

  /**
   * This cell's `range`.
   *
   * @returns { CellRange } This cell's range with `index` (row + column + tube) and `size` (width + height + depth in number of rows and columns and tubes).
   */
  public abstract range: CellRange;

  /**
   * This cell's upper-left position in the table, with `row` and `col` (and eventually `depth`)).
   *
   * @returns { CellIndex } The cell's upper-left(-front) position.
   */
  public abstract index: CellIndex;

  /**
   * The cell's size, with `width` and `height` as number of columns and rows (and `depth` as number of tubes).
   *
   * @returns { CellSize } The size of the cell.
   */
  public abstract size: CellSize;

  /**
   * The cell's bounding box with top-left(-front) position and bottom-right(-back) one, as `row` and `column` (and `depth`).
   *
   * @returns { CellBounds } The cell's bounding box.
   */
  public abstract boundingBox: CellBounds;

  /**
   * The selection status of the cell.
   *
   * @returns { boolean } `true` if selected.
   */
  public abstract isSelected: boolean;

  /**
   * The active status of the cell.
   *
   * @returns { boolean } `true` if active.
   */
  public abstract hasFocus: boolean;

  /**
   * User data associated to this cell.
   */
  public abstract userData: any | undefined;

  /**
   * Overrides 'instanceof' behavior.
   */
  public static [Symbol.hasInstance](
    instance: unknown
  ): instance is AbstractCell {
    if (instance === null || typeof instance !== 'object') return false;

    const inst = instance as any;

    const row: any = inst.row;
    const col: any = inst.col;

    const select: unknown = inst.select;
    const unselect: unknown = inst.unselect;
    const focus: unknown = inst.focus;
    const blur: unknown = inst.blur;

    return (
      typeof row === 'number' &&
      typeof col === 'number' &&
      typeof select === 'function' &&
      typeof unselect === 'function' &&
      typeof focus === 'function' &&
      typeof blur === 'function'
    );
  }
}
