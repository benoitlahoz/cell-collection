/**
 * `cell-collection` core package.
 *
 * @module
 *
 * @example
 * import { CellCollection, Cell } from 'cell-collection';
 *
 * const collection = new CellCollection();
 * const cell = new Cell({
 *   index: {
 *     row: 0,
 *     col: 0,
 *   },
 *   size: {
 *     width: 1,
 *     height: 1,
 *   }
 * });
 *
 * collection.push(cell);
 *
 * console.log(collection.length); // 1
 * console.log(collection.has(0, 0)); // true
 */

export * from './abstract/cell-collection.abstract';
export * from './abstract/cell.abstract';
export * from './core/cell-collection.module';
export * from './core/cell.module';
