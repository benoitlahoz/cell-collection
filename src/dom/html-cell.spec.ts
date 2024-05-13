import { describe, expect, test } from 'vitest';
import { HTMLCell } from './html-cell.module';
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;

describe('HTMLCell', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const cell = new HTMLCell(
    div,
    {
      index: {
        row: 0,
        col: 0,
      },
      size: {
        width: 1,
        height: 1,
      },
    },
    {
      selectedSelector: 'selected',
      focusSelector: 'focused',
      pointerEventChannel: 'pointerdown',
    }
  );

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
    expect(div.classList.contains('selected')).toBeTruthy();
    cell.unselect();
    expect(cell.isSelected).toBeFalsy();
    expect(div.classList.contains('selected')).toBeFalsy();
  });

  test('instance should be focusable', () => {
    cell.focus();
    expect(cell.hasFocus).toBeTruthy();
    expect(div.classList.contains('focused')).toBeTruthy();
    cell.blur();
    expect(cell.hasFocus).toBeFalsy();
    expect(div.classList.contains('focused')).toBeFalsy();
  });

  test('element of cell should be defined', () => {
    expect(cell.element).toEqual(div);
  });

  test('cell should handle event on its HTMLElement', () => {
    let flag = false;
    const listener = ((_: PointerEvent) => {
      flag = true;
    }) as EventListener;

    cell.addPointerListener(listener);

    const event = document.createEvent('HTMLEvents');
    event.initEvent('pointerdown', false, true);
    div.dispatchEvent(event);

    expect(flag).toBeTruthy();

    expect(cell['_pointerListener']).toEqual(listener);
    cell.removePointerListener();
    expect(cell['_pointerListener']).toBeUndefined;
    // Pointer listener is now undefined: test branch.
    cell.removePointerListener();
  });

  test('userData should be defined', () => {
    const obj = { foo: 'bar' };
    cell.userData = obj;
    expect(cell.userData).toEqual(obj);
    expect(cell.userData.foo).toEqual(obj.foo);
  });

  test('should dispose cell', () => {
    cell.dispose();
    expect(cell.element).toBeUndefined();
    expect(() => cell.row).toThrowError();
  });
});
