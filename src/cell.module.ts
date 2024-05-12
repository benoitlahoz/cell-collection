import {
  AbstractCell,
  CellBounds,
  CellIndex,
  CellRange,
  CellSize,
} from './abstract/cell.abstract';

export class Cell implements AbstractCell {
  public userData: any | undefined;

  private _focused = false;
  private _selected = false;

  /**
   * Represents a cell of a multidimensional array.
   *
   * @param { CellRange } _range The range of the cell in rows and columns (and tubes in case of 3D).
   */
  constructor(private _range: CellRange) {}

  public dispose(): void {
    this.blur();
    this.unselect();

    const self = this as any;
    delete self._userData;
    delete self._element;
    delete self._range;
    delete self._options;
    delete self._addSelectedClass;
    delete self._addFocusedClass;
    delete self._removeSelectedClass;
    delete self._removeFocusedClass;
  }

  public focus(): Cell {
    this._focused = true;
    return this;
  }

  public blur(): Cell {
    this._focused = false;
    return this;
  }

  public select(): Cell {
    this._selected = true;
    return this;
  }

  public unselect(): Cell {
    this._selected = false;
    return this;
  }

  public get row(): number {
    return this._range.index.row;
  }

  public get col(): number {
    return this._range.index.col;
  }

  public get tube(): number {
    return this._range.index.tube || 0;
  }

  public get width(): number {
    return this._range.size.width;
  }

  public get height(): number {
    return this._range.size.height;
  }

  public get depth(): number {
    return this._range.size.depth || 1;
  }

  public get range(): CellRange {
    return {
      index: {
        tube: 0,
        ...this._range.index,
      },
      size: {
        depth: 1,
        ...this._range.size,
      },
    };
  }

  public get index(): CellIndex {
    return this.range.index;
  }

  public get size(): CellSize {
    return this.range.size;
  }

  public get boundingBox(): CellBounds {
    return {
      begin: {
        row: this.row,
        col: this.col,
        tube: this.tube,
      },
      end: {
        row: this.row + this.height - 1,
        col: this.col + this.width - 1,
        tube: this.tube + this.depth - 1,
      },
    };
  }

  public get isSelected(): boolean {
    return this._selected;
  }

  public get hasFocus(): boolean {
    return this._focused;
  }
}
