import { describe, expect, test } from 'vitest';
import { Cell } from './cell.module';
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;

describe('HTMLCell', () => {
  const cell = new Cell({
    index: {
      row: 0,
      col: 0,
    },
    size: {
      width: 1,
      height: 1,
    },
  });

  test('cell should be defined', () => {
    expect(cell).toBeDefined();

    expect(cell.row).toEqual(0);
    expect(cell.col).toEqual(0);
    expect(cell.tube).toEqual(0);

    expect(cell.width).toEqual(1);
    expect(cell.height).toEqual(1);
    expect(cell.depth).toEqual(1);

    const range = cell.range;
    expect(range.index.row).toEqual(0);
    expect(range.index.col).toEqual(0);
    expect(range.index.tube).toEqual(0);

    expect(range.size.width).toEqual(1);
    expect(range.size.height).toEqual(1);
    expect(range.size.depth).toEqual(1);

    expect(cell.index.row).toEqual(0);
    expect(cell.index.col).toEqual(0);
    expect(cell.index.tube).toEqual(0);

    expect(cell.size.width).toEqual(1);
    expect(cell.size.height).toEqual(1);
    expect(cell.size.depth).toEqual(1);

    const boundingBox = cell.boundingBox;
    expect(boundingBox.begin.row).toEqual(0);
    expect(boundingBox.begin.col).toEqual(0);
    expect(boundingBox.begin.tube).toEqual(0);
    expect(boundingBox.end.row).toEqual(0);
    expect(boundingBox.end.col).toEqual(0);
    expect(boundingBox.end.tube).toEqual(0);
  });

  test('instance should be selectable', () => {
    cell.select();
    expect(cell.isSelected).toBeTruthy();
    cell.unselect();
    expect(cell.isSelected).toBeFalsy();
  });

  test('instance should be focusable', () => {
    cell.focus();
    expect(cell.hasFocus).toBeTruthy();
    cell.blur();
    expect(cell.hasFocus).toBeFalsy();
  });

  test('userData should be defined', () => {
    const obj = { foo: 'bar' };
    cell.userData = obj;
    expect(cell.userData).toEqual(obj);
    expect(cell.userData.foo).toEqual(obj.foo);
  });

  test('should dispose cell', () => {
    cell.dispose();
    expect(() => cell.row).toThrowError();
  });
});
