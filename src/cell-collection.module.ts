import {
  AbstractCellCollection,
  CellCollectionCallback,
} from './abstract/cell-collection.abstract';
import {
  AbstractCell,
  CellBounds,
  CellIndex,
  CellRange,
  CellSize,
} from './abstract/cell.abstract';

export enum CellCollectionCacheKey {
  Sorted = 'sorted',
  SortedReverse = 'sorted:reverse',
}

export class CellCollection implements AbstractCellCollection {
  /**
   * Creates a new `CellCollection` from an `Array` of `AbstractCell`.
   *
   * @param { Array<AbstractCell> } cells The cells to create the `CellCollection` from.
   *
   * @returns A new `CellCollection`.
   */
  public static fromArray(cells: Array<AbstractCell>): CellCollection {
    const is3d = cells.some((cell: AbstractCell) => cell.tube > 0);

    if (is3d) {
      return new CellCollection([[cells]]);
    } else {
      return new CellCollection([cells]);
    }
  }

  /**
   * Make collection indexable.
   * May not be very useful, since we may only want to access the cells by their [row, col, tube] indexes.
   *
   * @example
   * const cell = myCollection[0];
   */
  [index: number]: AbstractCell;

  /**
   * A 1D `Array` of `AbstractCell` belonging to this `CellCollection`.
   */
  private _cells: Array<AbstractCell> = [];

  /**
   * A cache to bypass some operations on the collection.
   */
  private _cache: Record<string, any> = {
    // Will keep cached versions of the sorted collection.
    [CellCollectionCacheKey.Sorted]: undefined,
    [CellCollectionCacheKey.SortedReverse]: undefined,
  };

  constructor(
    array: Array<Array<AbstractCell>> | Array<Array<Array<AbstractCell>>> = [[]]
  ) {
    try {
      const is2dArray = (array: Array<any>) =>
        array.every((item: any) => Array.isArray(item));
      const is3dArray = (array: Array<any>) =>
        array.every((item: any) => is2dArray(item));

      if (is3dArray(array)) {
        this._cells = array.flat(3);
      } else if (is2dArray(array)) {
        this._cells = array.flat(2);
      }
    } catch (_: unknown) {
      throw new Error(
        'Array of `AbstractCell` must be at least 2-dimensional.'
      );
    }

    // Public methods.
    const prototypeMethods: string[] = Object.getOwnPropertyNames(
      CellCollection.prototype
    );

    // Instance's variables.
    const prototypeVariables = Object.getOwnPropertyNames(this);

    const proxy = new Proxy(this, {
      // A getter to have the iterator working like an array: `myCollection[0]`.
      get: function (target: any, name: any) {
        if (name === Symbol.iterator) {
          // for ... of
          return target[Symbol.iterator].bind(target);
        } else if (
          !prototypeMethods.includes(name) &&
          !prototypeVariables.includes(name)
        ) {
          // If the getter is not an object method or variable,
          // returns the cell at given index.
          return target._cells[name];
        }
        return target[name];
      },
    });

    return proxy;
  }

  /**
   * Tear-down the collection.
   */
  public dispose(): void {
    const self = this as any;

    self._cells.length = 0;
    delete self._cells;

    delete self._cache;
  }

  public push(...items: AbstractCell[]): number {
    return this._cells.push(...items);
  }

  public unshift(...items: AbstractCell[]): number {
    return this._cells.unshift(...items);
  }

  /**
   * Remove the first cell of the collection.
   *
   * @returns { AbstractCell | undefined } The removed cell or undefined if it was not found.
   */
  public shift(): AbstractCell | undefined {
    return this._cells.shift();
  }

  public pop(): AbstractCell | undefined {
    return this._cells.pop();
  }

  public indexOf(cell: AbstractCell, fromIndex?: number): number {
    return this._cells.indexOf(cell, fromIndex);
  }

  public in(range: CellRange): CellCollection;
  public in(bounds: CellBounds): CellCollection;
  public in(begin: AbstractCell, end: AbstractCell): CellCollection;
  public in(begin: CellIndex, end: CellIndex): CellCollection;
  public in(index: CellIndex, size: CellSize): CellCollection;
  public in(
    ...args: (CellRange | CellBounds | AbstractCell | CellIndex | CellSize)[]
  ): CellCollection {
    const actualRange: CellRange = {
      index: {
        row: -1,
        col: -1,
        tube: -1,
      },
      size: {
        width: 0,
        height: 0,
        depth: 0,
      },
    };

    if (args.length === 1) {
      if (
        typeof (args[0] as any).index !== 'undefined' &&
        typeof (args[0] as any).size !== 'undefined'
      ) {
        // CellRange

        const range = args[0] as CellRange;
        actualRange.index = {
          row: range.index.row,
          col: range.index.col,
          tube: range.index.tube || 0,
        };
        actualRange.size = {
          width: range.size.width,
          height: range.size.height,
          depth: range.size.depth || 1,
        };
      } else if (
        typeof (args[0] as any).begin !== 'undefined' &&
        typeof (args[0] as any).end !== 'undefined'
      ) {
        // CellBounds
        const begin = (args[0] as CellBounds).begin;
        const end = (args[0] as CellBounds).end;

        actualRange.index = {
          row: Math.min(begin.row, end.row),
          col: Math.min(begin.col, end.col),
          tube:
            typeof begin.tube !== 'undefined' && typeof end.tube !== 'undefined'
              ? Math.min(begin.tube, end.tube)
              : 0,
        };
        actualRange.size = {
          width: Math.max(begin.col, end.col) - actualRange.index.col + 1,
          height: Math.max(begin.row, end.row) - actualRange.index.row + 1,
          depth:
            typeof begin.tube !== 'undefined' && typeof end.tube !== 'undefined'
              ? Math.max(begin.tube, end.tube) - actualRange.index.tube! + 1
              : 1,
        };
      }
    } else if (args.length === 2) {
      if (args[0] instanceof AbstractCell && args[1] instanceof AbstractCell) {
        // Cells

        const begin = args[0].index as CellIndex;
        const end = args[1].index as CellIndex;

        actualRange.index = {
          row: Math.min(begin.row, end.row),
          col: Math.min(begin.col, end.col),
          tube:
            typeof begin.tube !== 'undefined' && typeof end.tube !== 'undefined'
              ? Math.min(begin.tube, end.tube)
              : 0,
        };
        actualRange.size = {
          width: Math.max(begin.row, end.row) - actualRange.index.row + 1,
          height: Math.max(begin.col, end.col) - actualRange.index.col + 1,
          depth:
            typeof begin.tube !== 'undefined' && typeof end.tube !== 'undefined'
              ? Math.max(begin.tube, end.tube) - actualRange.index.tube! + 1
              : 1,
        };
      } else if (
        typeof (args[0] as any).row !== 'undefined' &&
        typeof (args[1] as any).row !== 'undefined'
      ) {
        // 'begin' and 'end' CellIndex

        const begin = args[0] as CellIndex;
        const end = args[1] as CellIndex;

        actualRange.index = {
          row: Math.min(begin.row, end.row),
          col: Math.min(begin.col, end.col),
          tube:
            typeof begin.tube !== 'undefined' && typeof end.tube !== 'undefined'
              ? Math.min(begin.tube, end.tube)
              : 0,
        };
        actualRange.size = {
          width: Math.max(begin.col, end.col) - actualRange.index.col + 1,
          height: Math.max(begin.row, end.row) - actualRange.index.row + 1,
          depth:
            typeof begin.tube !== 'undefined' && typeof end.tube !== 'undefined'
              ? Math.max(begin.tube, end.tube) - actualRange.index.tube! + 1
              : 1,
        };
      } else if (
        typeof (args[0] as any).row !== 'undefined' &&
        typeof (args[1] as any).width !== 'undefined'
      ) {
        // 'begin' CellIndex and 'end' CellSize

        const index = args[0] as CellIndex;
        const size = args[1] as CellSize;

        actualRange.index = {
          tube: 0,
          ...index,
        };
        actualRange.size = {
          depth: 1,
          ...size,
        };
      }
    }

    return this.filter(
      (cell: AbstractCell) =>
        cell.row >= actualRange.index.row &&
        cell.row < actualRange.index.row + actualRange.size.height &&
        cell.col >= actualRange.index.col &&
        cell.col < actualRange.index.col + actualRange.size.width &&
        cell.tube >= actualRange.index.tube! &&
        cell.tube < actualRange.index.tube! + actualRange.size.depth!
    );
  }

  public has(cell?: AbstractCell): boolean;
  public has(row: number, col: number, tube?: number): boolean;
  public has(index: CellIndex): boolean;
  public has(
    ...args: (AbstractCell | number | undefined | CellIndex)[]
  ): boolean {
    if (typeof args[0] === 'undefined') {
      return false;
    } else if (args[0] instanceof AbstractCell) {
      return this._cells.includes(args[0]);
    } else if (typeof (args[0] as any).row !== 'undefined') {
      const arg: CellIndex = args[0] as CellIndex;
      return typeof this.at(arg.row, arg.col, arg.tube || 0) !== 'undefined';
    } else if (
      (args.length === 2 &&
        typeof args[0] === 'number' &&
        typeof args[1] === 'number') ||
      (args.length === 3 &&
        typeof args[0] === 'number' &&
        typeof args[1] === 'number' &&
        typeof args[2] === 'number')
    ) {
      return (
        typeof this.at(args[0], args[1], args[2] as number | undefined) !==
        'undefined'
      );
    }
    return false;
  }

  public at(row: number, col: number, tube?: number): AbstractCell | undefined {
    return this._cells.find(
      (cell: AbstractCell) =>
        cell.row === row &&
        cell.col === col &&
        (tube ? cell.tube === tube : cell.tube === 0)
    );
  }

  public shuffle(): CellCollection {
    const arr = this.toArray()
      .map((cell: AbstractCell) => ({ cell, sortKey: Math.random() }))
      .sort((a: any, b: any) => a.sortKey - b.sortKey)
      .map(({ cell }) => cell);

    return CellCollection.fromArray(arr);
  }

  public sort(
    compareFn?: (a: AbstractCell, b: AbstractCell) => number
  ): CellCollection {
    if (compareFn) {
      const arr = this._cells.sort(compareFn);
      return CellCollection.fromArray(arr);
    } else if (
      !this._cache[CellCollectionCacheKey.Sorted] ||
      !this._cache[CellCollectionCacheKey.Sorted].every((cell: AbstractCell) =>
        this._cells.includes(cell)
      )
    ) {
      const arr = [...this._cells];
      arr.sort(((a: AbstractCell, b: AbstractCell) => {
        if (a.row === b.row && a.col === b.col && a.tube === b.tube) {
          throw new Error(
            `Two cells can't be at the same position (${a.row}, ${a.col}, ${a.tube})`
          );
        }

        if (a.row <= b.row && a.col <= b.col && a.tube <= b.tube) {
          return -1;
        }
        if (a.row > b.row || a.col > b.col || a.tube > b.tube) {
          return 1;
        }
      }) as any);
      this._cache[CellCollectionCacheKey.Sorted] =
        CellCollection.fromArray(arr);
    }
    return this._cache[CellCollectionCacheKey.Sorted];
  }

  public sortReverse(): CellCollection {
    if (
      !this._cache[CellCollectionCacheKey.SortedReverse] ||
      !this._cache[CellCollectionCacheKey.SortedReverse].every(
        (cell: AbstractCell) => this._cells.includes(cell)
      )
    ) {
      const arr = [...this._cells];
      arr.sort(((a: AbstractCell, b: AbstractCell) => {
        if (a.row === b.row && a.col === b.col && a.tube === b.tube) {
          throw new Error(
            `Two cells can't be at the same position (${a.row}, ${a.col}, ${a.tube})`
          );
        }

        if (a.row >= b.row && a.col >= b.col && a.tube >= b.tube) {
          return -1;
        }
        if (a.row < b.row || a.col < b.col || a.tube < b.tube) {
          return 1;
        }
      }) as any);
      this._cache[CellCollectionCacheKey.SortedReverse] =
        CellCollection.fromArray(arr);
    }
    return this._cache[CellCollectionCacheKey.SortedReverse];
  }

  public every(callback: CellCollectionCallback): boolean {
    return this._cells.every((cell: AbstractCell, index: number) =>
      callback(cell, index, this)
    );
  }

  public some(callback: CellCollectionCallback): boolean {
    return this._cells.some((cell: AbstractCell, index: number) =>
      callback(cell, index, this)
    );
  }

  public forEach(callback: CellCollectionCallback): void {
    this._cells.forEach((cell: AbstractCell, index: number) =>
      callback(cell, index, this)
    );
  }

  public map(callback: CellCollectionCallback): Array<any> {
    return this._cells.map((cell: AbstractCell, index: number) =>
      callback(cell, index, this)
    );
  }

  public find(callback: CellCollectionCallback): AbstractCell | undefined {
    return this._cells.find((cell: AbstractCell, index: number) =>
      callback(cell, index, this)
    );
  }

  public down(from?: AbstractCell): AbstractCell | undefined {
    if (!from) return;
    return this.at(from.row + 1, from.col);
  }

  public up(from?: AbstractCell): AbstractCell | undefined {
    if (!from) return;
    return this.at(from.row - 1, from.col);
  }

  public right(from?: AbstractCell): AbstractCell | undefined {
    if (!from) return;
    return this.at(from.row, from.col + 1);
  }

  public left(from?: AbstractCell): AbstractCell | undefined {
    if (!from) return;
    return this.at(from.row, from.col - 1);
  }

  public back(from?: AbstractCell): AbstractCell | undefined {
    if (!from) return;
    return this.at(from.row, from.col, from.tube + 1);
  }

  public front(from?: AbstractCell): AbstractCell | undefined {
    if (!from) return;
    return this.at(from.row, from.col, from.tube - 1);
  }

  public filter(callback: CellCollectionCallback): CellCollection {
    return CellCollection.fromArray(
      this._cells.filter((cell: AbstractCell, index: number) =>
        callback(cell, index, this)
      )
    );
  }

  public filterByRow(row: number): CellCollection {
    return CellCollection.fromArray(
      this._cells.filter((cell: AbstractCell) => cell.row === row)
    );
  }

  public filterByColumn(col: number): CellCollection {
    return CellCollection.fromArray(
      this._cells.filter((cell: AbstractCell) => cell.col === col)
    );
  }

  public filterByTube(tube: number): CellCollection {
    return CellCollection.fromArray(
      this._cells.filter((cell: AbstractCell) => cell.tube === tube)
    );
  }

  public clear(): void {
    this._cells.length = 0;
  }

  public entries(): IterableIterator<[number, AbstractCell]> {
    return this._cells.entries();
  }

  public values(): IterableIterator<AbstractCell> {
    return this._cells.values();
  }

  public keys(): IterableIterator<number> {
    return this._cells.keys();
  }

  public toArray(): Array<AbstractCell> {
    return [...this._cells];
  }

  public toSet(): Set<AbstractCell> {
    return new Set([...this._cells]);
  }

  /**
   * An alias for `unselect()`. Unselect all cells.
   *
   * @returns { CellCollection } A new collection with unselected cells.
   */
  public resetSelection(): CellCollection {
    return this.unselect() as CellCollection;
  }

  public select(): CellCollection;
  public select(cell?: AbstractCell | undefined): AbstractCell | undefined;
  public select(
    row: number,
    col: number,
    tube?: number
  ): AbstractCell | undefined;
  public select(index: CellIndex): AbstractCell | undefined;
  public select(
    ...args: (AbstractCell | number | CellIndex | undefined)[]
  ): AbstractCell | CellCollection | undefined {
    if (typeof args[0] === 'undefined') {
      // Select all.

      const selected = [];
      for (const cell of this._cells) {
        selected.push(cell.select());
      }

      return CellCollection.fromArray(selected);
    } else if (args[0] instanceof AbstractCell && this.has(args[0])) {
      return args[0].select();
    } else if (typeof (args[0] as any).row !== 'undefined') {
      const arg: CellIndex = args[0] as CellIndex;
      const cell = this.at(arg.row, arg.col, arg.tube || 0);

      if (cell) {
        return cell.select();
      }
    } else if (
      (args.length === 2 &&
        typeof args[0] === 'number' &&
        typeof args[1] === 'number') ||
      (args.length === 3 &&
        typeof args[0] === 'number' &&
        typeof args[1] === 'number' &&
        typeof args[2] === 'number')
    ) {
      const cell = this.at(args[0], args[1], args[2] as number | undefined);
      if (cell) {
        return cell.select();
      }
    }
    return;
  }

  public unselect(): CellCollection;
  public unselect(cell?: AbstractCell): AbstractCell | undefined;
  public unselect(
    row: number,
    col: number,
    tube?: number
  ): AbstractCell | undefined;
  public unselect(index: CellIndex): AbstractCell | undefined;
  public unselect(
    ...args: (AbstractCell | number | CellIndex | undefined)[]
  ): AbstractCell | CellCollection | undefined {
    if (typeof args[0] === 'undefined') {
      // Unselect all.
      const cells = this.selected;
      for (const cell of cells) {
        cell.unselect();
      }

      return cells;
    } else if (args[0] instanceof AbstractCell && this.has(args[0])) {
      return args[0].unselect();
    } else if (typeof (args[0] as any).row !== 'undefined') {
      const arg: CellIndex = args[0] as CellIndex;
      const cell = this.at(arg.row, arg.col, arg.tube || 0);
      if (cell) {
        return cell.unselect();
      }
    } else if (
      (args.length === 2 &&
        typeof args[0] === 'number' &&
        typeof args[1] === 'number') ||
      (args.length === 3 &&
        typeof args[0] === 'number' &&
        typeof args[1] === 'number' &&
        typeof args[2] === 'number')
    ) {
      const cell = this.at(args[0], args[1], args[2] as number | undefined);
      if (cell) {
        return cell.unselect();
      }
    }
    return;
  }

  public focus(): AbstractCell | undefined;
  public focus(cell?: AbstractCell | undefined): AbstractCell | undefined;
  public focus(
    row: number,
    col: number,
    tube?: number
  ): AbstractCell | undefined;
  public focus(index: CellIndex): AbstractCell | undefined;
  public focus(
    ...args: (AbstractCell | number | CellIndex | undefined)[]
  ): AbstractCell | undefined {
    if (typeof args[0] === 'undefined') {
      // Focus on first cell.

      const cell = this.firstCell;

      if (cell) {
        // Blur all other cells.
        this.blur();
        return cell.focus();
      }
    } else if (args[0] instanceof AbstractCell && this.has(args[0])) {
      // Blur all other cells.
      this.blur();
      return args[0].focus();
    } else if (typeof (args[0] as any).row !== 'undefined') {
      const arg: CellIndex = args[0] as CellIndex;
      const cell = this.at(arg.row, arg.col, arg.tube || 0);
      if (cell) {
        // Blur all other cells.
        this.blur();
        return cell.focus();
      }
    } else if (
      (args.length === 2 &&
        typeof args[0] === 'number' &&
        typeof args[1] === 'number') ||
      (args.length === 3 &&
        typeof args[0] === 'number' &&
        typeof args[1] === 'number' &&
        typeof args[2] === 'number')
    ) {
      const cell = this.at(args[0], args[1], args[2] as number | undefined);
      if (cell) {
        // Blur all other cells.
        this.blur();
        return cell.focus();
      }
    }
    return;
  }

  public blur(): AbstractCell | undefined;
  public blur(cell?: AbstractCell): AbstractCell;
  public blur(
    row: number,
    col: number,
    tube?: number
  ): AbstractCell | undefined;
  public blur(index: CellIndex): AbstractCell | undefined;
  public blur(
    ...args: (AbstractCell | number | CellIndex | undefined)[]
  ): AbstractCell | CellCollection | undefined {
    if (typeof args[0] === 'undefined') {
      // Blur all focused cells (there should be only one).

      const cells = this.filter((cell: AbstractCell) => cell.hasFocus === true);
      if (cells.length > 0) {
        // Blur all cells.
        for (const cell of cells) {
          cell.blur();
        }

        return cells[0];
      }
    } else if (args[0] instanceof AbstractCell && this.has(args[0])) {
      return args[0].blur();
    } else if (typeof (args[0] as any).row !== 'undefined') {
      const arg: CellIndex = args[0] as CellIndex;
      const cell = this.at(arg.row, arg.col, arg.tube || 0);
      if (cell) {
        return cell.blur();
      }
    } else if (
      (args.length === 2 &&
        typeof args[0] === 'number' &&
        typeof args[1] === 'number') ||
      (args.length === 3 &&
        typeof args[0] === 'number' &&
        typeof args[1] === 'number' &&
        typeof args[2] === 'number')
    ) {
      const cell = this.at(args[0], args[1], args[2] as number | undefined);
      if (cell) {
        return cell.blur();
      }
    }
    return;
  }

  public set length(length: number) {
    this._cells.length = length;
  }

  public get length(): number {
    return this._cells.length;
  }

  public get firstCell(): AbstractCell | undefined {
    const collection = this.sort();
    return collection[0];
  }

  public get lastCell(): AbstractCell | undefined {
    const collection = this.sort();
    return collection[collection.length - 1];
  }

  public get firstRowNumber(): number {
    let first = Infinity;
    for (const cell of this._cells) {
      if (cell.row < first) {
        first = cell.row;
      }
    }
    return first;
  }

  public get firstColumnNumber(): number {
    let first = Infinity;
    for (const cell of this._cells) {
      if (cell.col < first) {
        first = cell.col;
      }
    }
    return first;
  }

  public get firstTubeNumber(): number {
    let first = Infinity;
    for (const cell of this._cells) {
      if (cell.tube < first) {
        first = cell.tube;
      }
    }
    return first;
  }

  public get lastRowNumber(): number {
    let last = -1;
    for (const cell of this._cells) {
      if (cell.row > last) {
        last = cell.row;
      }
    }
    return last;
  }

  public get lastColumnNumber(): number {
    let last = -1;
    for (const cell of this._cells) {
      if (cell.col > last) {
        last = cell.col;
      }
    }
    return last;
  }

  public get lastTubeNumber(): number {
    let last = -1;
    for (const cell of this._cells) {
      if (cell.tube > last) {
        last = cell.tube;
      }
    }
    return last;
  }

  public get bounds(): CellBounds {
    return {
      begin: {
        row: this.firstRowNumber,
        col: this.firstColumnNumber,
        tube: this.firstTubeNumber,
      },
      end: {
        row: this.lastRowNumber,
        col: this.lastColumnNumber,
        tube: this.lastTubeNumber,
      },
    };
  }

  public get selectionLands(): Array<CellCollection> {
    const self = this;
    const selected = this.filter(
      (cell: AbstractCell) => cell.isSelected === true
    );

    const lands = [];
    const visited = new Set();

    const traverse = (
      row: number,
      col: number,
      tube: number,
      current = new CellCollection()
    ) => {
      if (!self.at(row, col, tube)) {
        return;
      }

      if (
        !self.at(row, col, tube)?.isSelected ||
        visited.has(`${row}-${col}-${tube}`)
      ) {
        return;
      }

      current.push(self.at(row, col, tube)!);
      visited.add(`${row}-${col}-${tube}`);

      // Rows
      traverse(row - 1, col, tube, current);
      traverse(row + 1, col, tube, current);

      // Columns
      traverse(row, col + 1, tube, current);
      traverse(row, col - 1, tube, current);

      // Tubes
      traverse(row, col, tube + 1, current);
      traverse(row, col, tube - 1, current);

      return current;
    };

    for (const cell of selected) {
      if (visited.has(`${cell.row}-${cell.col}-${cell.tube}`)) {
        continue;
      }
      const land = traverse(cell.row, cell.col, cell.tube);
      if (land) {
        lands.push(land);
      }
    }

    return lands;
  }

  public get selected(): CellCollection {
    return this.filter((cell: AbstractCell) => cell.isSelected === true);
  }

  public get focused(): AbstractCell | undefined {
    return this.find((cell: AbstractCell) => cell.hasFocus === true);
  }

  public get elements(): Array<Element | undefined> {
    return this._cells.map((cell: AbstractCell) => cell.element);
  }

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
  public [Symbol.iterator]() {
    let index = -1;
    const data: Array<AbstractCell> = this._cells ? this._cells : [];

    return {
      next: () => ({
        value: data[++index],
        done: !(index in data),
      }),
    };
  }
}
