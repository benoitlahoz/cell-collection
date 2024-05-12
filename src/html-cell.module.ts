import {
  AbstractCell,
  CellBounds,
  CellIndex,
  CellRange,
  CellSize,
} from './abstract/cell.abstract';

export interface HTMLCellOptions {
  selectedSelector: string;
  focusSelector: string;
  pointerEventChannel: keyof HTMLElementEventMap;
}

export enum HTMLCellDataAttributes {
  Row = 'data-cell-row',
  Col = 'data-cell-col',
  Width = 'data-cell-width',
  Height = 'data-cell-height',
}

const addClass =
  (...args: string[]) =>
  (element: HTMLElement) => {
    element.classList.add(...args);
  };

const removeClass =
  (...args: string[]) =>
  (element: HTMLElement) => {
    element.classList.remove(...args);
  };

export class HTMLCell implements AbstractCell {
  public userData: any | undefined;
  /**
   * Function to add the 'selected', 'focused', ... classes to cell's element.
   */
  private _addSelectedClass;
  private _addFocusedClass;
  /**
   * Function to remove a class from cell's element.
   */
  private _removeSelectedClass;
  private _removeFocusedClass;

  /**
   * The pointer listener attached to this cell.
   */
  private _pointerListener: EventListenerOrEventListenerObject | undefined;

  /**
   * Represents a cell of a multidimensional array.
   *
   * @param { HTMLElement } _element The DOM element for this cell.
   * @param { CellRange } _range The range of the cell in rows and columns (and tubes in case of 3D).
   * @param  { HTMLCellOptions } _options The options to handle this cell.
   */
  constructor(
    private _element: HTMLElement,
    private _range: CellRange,
    private _options: HTMLCellOptions
  ) {
    this._element.setAttribute(
      HTMLCellDataAttributes.Row,
      `${this._range.index.row}`
    );
    this._element.setAttribute(
      HTMLCellDataAttributes.Col,
      `${this._range.index.col}`
    );
    this._element.setAttribute(
      HTMLCellDataAttributes.Width,
      `${this._range.size.width}`
    );
    this._element.setAttribute(
      HTMLCellDataAttributes.Height,
      `${this._range.size.height}`
    );

    this._addSelectedClass = addClass(this._options.selectedSelector);
    this._addFocusedClass = addClass(this._options.focusSelector);

    this._removeSelectedClass = removeClass(this._options.selectedSelector);
    this._removeFocusedClass = removeClass(this._options.focusSelector);
  }

  public dispose(): void {
    this.blur();
    this.unselect();
    this.removePointerListener();

    this._element.removeAttribute(HTMLCellDataAttributes.Row);
    this._element.removeAttribute(HTMLCellDataAttributes.Col);
    this._element.removeAttribute(HTMLCellDataAttributes.Width);
    this._element.removeAttribute(HTMLCellDataAttributes.Height);

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

  public focus(): HTMLCell {
    this._addFocusedClass(this._element);
    return this;
  }

  public blur(): HTMLCell {
    this._removeFocusedClass(this._element);
    return this;
  }

  public select(): HTMLCell {
    this._addSelectedClass(this._element);
    return this;
  }

  public unselect(): HTMLCell {
    this._removeSelectedClass(this._element);
    return this;
  }

  public addPointerListener(listener: EventListener): void {
    this._pointerListener = listener;
    this._element.addEventListener(
      this._options.pointerEventChannel,
      this._pointerListener!
    );
  }

  public removePointerListener(): void {
    if (this._pointerListener) {
      (this._element as HTMLElement).removeEventListener(
        this._options.pointerEventChannel,
        this._pointerListener
      );
      this._pointerListener = undefined;
    }
  }

  public get element(): HTMLElement {
    return this._element;
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
    return this._element.classList.contains(this._options.selectedSelector);
  }

  public get hasFocus(): boolean {
    return this._element.classList.contains(this._options.focusSelector);
  }
}
