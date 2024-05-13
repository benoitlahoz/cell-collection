import { describe, expect, test } from 'vitest';
import { HTMLCell } from './html-cell.module';
import { CellCollection } from './cell-collection.module';
import { JSDOM } from 'jsdom';
import { AbstractCellCollection } from './abstract/cell-collection.abstract';
import { AbstractCell } from './abstract/cell.abstract';

const dom = new JSDOM();
global.document = dom.window.document;

const SIZE = 10;

const cells: Array<Array<Array<HTMLCell>>> = [];

// Build a 3D array of cells.
for (let row = 0; row < SIZE; row++) {
  const rowElement = document.createElement('div');
  rowElement.classList.add('row');
  document.body.appendChild(rowElement);
  const columnArray = [];
  for (let col = 0; col < SIZE; col++) {
    const colElement = document.createElement('div');
    colElement.classList.add('col');
    rowElement.appendChild(colElement);

    const tubeArray = [];
    for (let tube = 0; tube < SIZE; tube++) {
      const tubeElement = document.createElement('div');
      tubeElement.classList.add('tube');
      colElement.appendChild(tubeElement);

      tubeArray.push(
        new HTMLCell(
          tubeElement,
          {
            index: {
              row,
              col,
              tube,
            },
            size: {
              width: 1,
              height: 1,
              depth: 1,
            },
          },
          {
            selectedSelector: 'selected',
            focusSelector: 'focused',
            pointerEventChannel: 'pointerdown',
          }
        )
      );
    }
    columnArray.push(tubeArray);
  }
  cells.push(columnArray);
}

describe('CellCollection', () => {
  test('collection should be initialized with at least a two dimensions array', () => {
    // @ts-ignore
    expect(() => new CellCollection(['not-a-cell'])).toThrowError();
    expect(new CellCollection(cells[0])).toBeInstanceOf(CellCollection);
  });

  const collection = new CellCollection(cells);

  test('collection should be defined', () => {
    expect(collection).toBeDefined();

    expect(collection.length).toEqual(SIZE * SIZE * SIZE);

    const bounds = collection.bounds;
    expect(bounds.begin.row).toBe(0);
    expect(bounds.begin.col).toBe(0);
    expect(bounds.begin.tube).toBe(0);
    expect(bounds.end.row).toBe(SIZE - 1);
    expect(bounds.end.col).toBe(SIZE - 1);
    expect(bounds.end.tube).toBe(SIZE - 1);

    expect(collection.firstCell!.row).toEqual(0);
    expect(collection.lastCell!.row).toEqual(SIZE - 1);
    expect(collection.firstRowNumber).toEqual(0);
    expect(collection.lastRowNumber).toEqual(SIZE - 1);
    expect(collection.firstColumnNumber).toEqual(0);
    expect(collection.lastColumnNumber).toEqual(SIZE - 1);
    expect(collection.firstTubeNumber).toEqual(0);
    expect(collection.lastTubeNumber).toEqual(SIZE - 1);
  });

  test('cells should be reachable', () => {
    const cell = collection.at(2, 5, 6);

    expect(cell).toBeDefined();

    expect(collection.indexOf(cell!, 0)).toBeGreaterThanOrEqual(0);

    // @ts-ignore
    expect(collection.has('not-valid')).toBeFalsy();
    expect(collection.has()).toBeFalsy();
    expect(collection.has(cell)).toBeTruthy();
    expect(collection.has(2, 5, 6)).toBeTruthy();
    expect(collection.has({ row: 2, col: 5, tube: 6 })).toBeTruthy();
    expect(
      collection.has({ row: SIZE + 1, col: SIZE + 1, tube: SIZE + 1 })
    ).toBeFalsy();
  });

  test('collection should return cells in a range', () => {
    const range = {
      index: {
        row: 2,
        col: 5,
        tube: 6,
      },
      size: {
        width: 2,
        height: 2,
        depth: 2,
      },
    };

    const bounds = {
      begin: {
        row: 2,
        col: 5,
        tube: 6,
      },
      end: {
        row: 3,
        col: 6,
        tube: 7,
      },
    };

    const firstCell = collection.at(
      range.index.row,
      range.index.col,
      range.index.tube
    );
    const secondCell = collection.at(
      bounds.end.row,
      bounds.end.col,
      bounds.end.tube
    );

    expect(collection.in(range).length).toBe(2 * 2 * 2);
    expect(collection.in(bounds).length).toBe(2 * 2 * 2);
    expect(collection.in(range.index, range.size).length).toBe(2 * 2 * 2);
    expect(collection.in(bounds.begin, bounds.end).length).toBe(2 * 2 * 2);
    expect(collection.in(firstCell!, secondCell!).length).toBe(2 * 2 * 2);
    expect(
      collection.in({
        index: {
          row: SIZE,
          col: SIZE,
          tube: SIZE,
        },
        size: {
          width: 10,
          height: 10,
          depth: 10,
        },
      }).length
    ).toEqual(0);
  });

  test('collection should be traversed', () => {
    const every = collection.every(
      (cell: AbstractCell, index: number, coll: AbstractCellCollection) =>
        cell instanceof HTMLCell &&
        index >= 0 &&
        coll.length === collection.length
    );
    expect(every).toBeTruthy();

    const some = collection.some(
      (cell: AbstractCell, index: number, coll: AbstractCellCollection) =>
        cell.element!.classList.contains('tube') &&
        index >= 0 &&
        coll.length === collection.length
    );
    expect(some).toBeTruthy();
    expect(() =>
      collection.forEach((cell: AbstractCell) => cell.select())
    ).not.toThrow();
    expect(collection.selected.length).toEqual(collection.length);
    collection.unselect();

    expect(() =>
      collection.forEach(
        (cell: AbstractCell, index: number) => (cell.userData = index)
      )
    ).not.toThrowError();
    expect(collection[0].userData).toBe(0);

    const mapped: Array<number> = collection.map(
      (cell: AbstractCell, index: number, coll: AbstractCellCollection) => {
        expect(typeof index === 'number').toBeTruthy();
        expect(cell).toBeInstanceOf(AbstractCell);
        expect(coll).toBeInstanceOf(CellCollection);
        return cell.userData;
      }
    );
    expect(mapped).toBeInstanceOf(Array);
    expect(mapped[0]).toBe(0);
  });

  test('collection should be filtered', () => {
    const cell = collection.find(
      (cell: AbstractCell) =>
        cell.row === 2 && cell.col === 5 && cell.tube === 6
    );
    expect(cell).toBeDefined();
    const filtered = collection.filter(
      (cell: AbstractCell) => cell.row >= 0 && cell.row <= 1
    );
    expect(filtered.length).toEqual(SIZE * SIZE * 2);
    const filteredRow = collection.filterByRow(0);
    expect(filteredRow.length).toBe(SIZE * SIZE);

    const filteredCol = collection.filterByColumn(0);
    expect(filteredCol.length).toBe(SIZE * SIZE);

    const filteredTube = collection.filterByTube(0);
    expect(filteredTube.length).toBe(SIZE * SIZE);
  });

  test('collection should be iterable', () => {
    for (const cell of collection) {
      expect(cell).toBeInstanceOf(HTMLCell);
    }

    for (const [index, cell] of collection.entries()) {
      expect(index).toBeGreaterThanOrEqual(0);
      expect(cell).toBeInstanceOf(HTMLCell);
    }

    for (const cell of collection.values()) {
      expect(cell).toBeInstanceOf(HTMLCell);
    }

    for (const index of collection.keys()) {
      expect(index).toBeGreaterThanOrEqual(0);
    }
  });

  test('cells should be added and removed', () => {
    const element = document.createElement('div');
    element.classList.add('tube');
    document.body.appendChild(element);

    const cell = new HTMLCell(
      element,
      {
        index: { row: 100, col: 100, tube: 100 },
        size: { width: 1, height: 1, depth: 1 },
      },
      {
        selectedSelector: 'selected',
        focusSelector: 'focused',
        pointerEventChannel: 'pointerdown',
      }
    );

    expect(collection.push(cell)).toEqual(SIZE * SIZE * SIZE + 1);
    expect(collection.pop()).toEqual(cell);
    expect(collection.unshift(cell)).toEqual(SIZE * SIZE * SIZE + 1);
    expect(collection[0].row).toEqual(100);
    expect(collection.shift()).toEqual(cell);
  });

  test('cells should be selectable', () => {
    const cell = collection.at(2, 5, 6);

    const selected = collection.select();
    const collSelected = collection.selected;

    expect(selected.length).toEqual(collSelected.length);

    collection.unselect();

    expect(collection.select(cell)).toEqual(cell);
    expect(collection.selected.length).toEqual(1);
    expect(collection.unselect().has(cell)).toBeTruthy();
    // @ts-ignore
    expect(collection.unselect('not-valid')).toBeUndefined();

    collection.select(cell);
    expect(collection.unselect(cell)).toBe(cell);

    collection.select(cell);
    expect(collection.unselect({ row: 2, col: 5, tube: 6 })).toEqual(cell);

    collection.select(cell);
    expect(collection.unselect(2, 5, 6)).toBe(cell);

    expect(collection.select({ row: 2, col: 5, tube: 6 })).toEqual(cell);
    expect(collection.resetSelection().length).toBe(1);
    expect(collection.select(2, 5, 6)).toEqual(cell);
    // @ts-ignore
    expect(collection.select('not-valid')).toBeUndefined();

    collection.unselect();
  });

  test('collection should compute contiguous selections and return `lands`', () => {
    collection
      .in({
        index: {
          row: 0,
          col: 0,
          tube: 0,
        },
        size: {
          width: 2,
          height: 2,
          depth: 2,
        },
      })
      .select();

    collection
      .in({
        index: {
          row: 3,
          col: 3,
          tube: 3,
        },
        size: {
          width: 2,
          height: 2,
          depth: 2,
        },
      })
      .select();

    collection
      .in({
        index: {
          row: 6,
          col: 6,
          tube: 6,
        },
        size: {
          width: 2,
          height: 2,
          depth: 2,
        },
      })
      .select();

    const lands = collection.selectionLands;
    expect(lands.length).toBe(3);
    expect(lands[0].has(0, 0, 0)).toBeTruthy();
    expect(lands[1].has(0, 0, 0)).toBeFalsy();
    expect(lands[1].has(3, 4, 4)).toBeTruthy();
    expect(lands[0].has(3, 4, 4)).toBeFalsy();
    expect(lands[2].has(6, 7, 7)).toBeTruthy();
    expect(lands[1].has(6, 7, 7)).toBeFalsy();
  });

  test('cells should be focusable', () => {
    const cell = collection.at(2, 5, 6);

    expect(collection.focus()).toEqual(collection[0]);
    expect(collection.focus(cell)).toEqual(cell);
    expect(collection.focus(2, 5, 6)).toEqual(cell);
    expect(collection.focus({ row: 2, col: 5, tube: 6 })).toEqual(cell);
    expect(collection.focused).toEqual(cell);
    // @ts-ignore
    expect(collection.focus('not-valid')).toBeUndefined();

    expect(collection.blur()).toEqual(cell);
    expect(collection.focused).toBeUndefined();

    collection.focus(cell);
    expect(collection.blur(cell)).toEqual(cell);

    collection.focus(cell);
    expect(collection.blur(2, 5, 6)).toEqual(cell);

    collection.focus(cell);
    expect(collection.blur({ row: 2, col: 5, tube: 6 })).toEqual(cell);

    // @ts-ignore
    expect(collection.blur('not-valid')).toBeUndefined();
  });

  test('cells should be reachable by direction', () => {
    const cell = collection.at(5, 5, 5);
    if (cell) {
      expect(collection.up(cell)!.row).toBe(4);
      expect(collection.down(cell)!.row).toBe(6);
      expect(collection.left(cell)!.col).toBe(4);
      expect(collection.right(cell)!.col).toBe(6);
      expect(collection.front(cell)!.tube).toBe(4);
      expect(collection.back(cell)!.tube).toBe(6);
    }

    expect(collection.up()).toBeUndefined();
    expect(collection.down()).toBeUndefined();
    expect(collection.left()).toBeUndefined();
    expect(collection.right()).toBeUndefined();
    expect(collection.front()).toBeUndefined();
    expect(collection.back()).toBeUndefined();
  });

  test('collection should be shuffled and sortable', () => {
    let shuffled = collection.shuffle();

    expect(shuffled[0]).not.toBe(collection[0]);
    expect(
      shuffled.sort((a: AbstractCell, b: AbstractCell) => a.row - b.row)[0].row
    ).toBe(0);

    shuffled = collection.shuffle();

    // Two cells are now the same.
    shuffled.push(collection[0]);
    expect(() => shuffled.sortReverse()).toThrowError();
    shuffled.pop();

    expect(shuffled.sortReverse()[0].row).toEqual(SIZE - 1);
    // Sort a second time to activate internal cache.
    expect(shuffled.sortReverse()[0].row).toEqual(SIZE - 1);

    // Two cells are now the same.
    shuffled.push(collection[0]);
    expect(() => shuffled.sort()).toThrowError();
    shuffled.pop();

    shuffled = collection.shuffle();
    expect(shuffled.sort()[0].row).toEqual(0);
    // Sort a second time to activate internal cache.
    expect(shuffled.sort()[0].row).toEqual(0);
  });

  test('collection should export HTML elements if it contains HTMLCell', () => {
    expect(collection.elements).toBeDefined();
    expect(collection.elements.length).toBe(SIZE * SIZE * SIZE);
  });

  test('collection should be exported as array and set', () => {
    expect(collection.toArray()).toBeInstanceOf(Array);
    expect(collection.toSet()).toBeInstanceOf(Set);
  });

  test('collection should be disposable', () => {
    expect(() => (collection.length = 0)).not.toThrow();
    expect(collection.length).toEqual(0);

    expect(() => collection.dispose()).not.toThrow();
    expect(() => collection.clear()).toThrowError();
  });
});
