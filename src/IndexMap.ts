/*
 * Copyright (c) 2020
 * Author: Marco Castiello
 * E-mail: marco.castiello@gmail.com
 * Project: Index Map
 */

/**
 * Define a bi-directional map that allow to link an Index with an object.
 * If you try to get, delete or check the existence of an entry, you can pass either the index or the object value.
 * @class
 * @type IndexMap
 * @extends Map
 */
class IndexMap<V extends string | number = any, T extends object = any> extends Map<V, T> {
  /**
   * WeakMap used to perform the reverse checks.
   * @type {WeakMap}
   */
  private weak: WeakMap<T, V>;

  /**
   * Check if the value provided is an index.
   * @param {any} value
   * @returns {value is V}
   * @private
   */
  private isIndex(value: V | T | string): value is V {
    return typeof value === 'string' || typeof value === 'number';
  }

  /**
   * Check if the value provided is an object.
   * @param {any} value
   * @returns {value is T}
   * @private
   */
  private isValue(value: V | T | string): value is T {
    return typeof value !== 'string' && typeof value !== 'number';
  }

  /**
   * Initialise the WeakMap.
   * @constructor
   */
  constructor(entries?: readonly (readonly [V, T])[]) {
    super(entries);
    this.weak = new WeakMap<T, V>(entries?.map(([key, value]) => [value, key]));
  }

  /**
   * Set the value on both maps.
   * @param {String} key
   * @param {Object} value
   * @returns {Map}
   */
  set(key: V, value: T) {
    this.weak.set(value, key);
    return super.set(key, value);
  }

  /**
   * Get the reference of the object or the associated index.
   * @param {String|Object} key
   * @returns {String|Object}
   */
  // @ts-ignore
  get(key: V | T): V | T | undefined {
    if (this.isIndex(key)) {
      return super.get(key);
    } else if (this.isValue(key)) {
      return this.weak.get(key);
    }
  }

  /**
   * Delete an entry.
   * @param {String|Object} key
   * @returns {Boolean}
   */
  delete(key: V | T): boolean {
    let id, object;
    if (this.isIndex(key)) {
      object = super.get(key);
      id = key;
    } else if (this.isValue(key)) {
      object = key;
      id = this.weak.get(key);
    }
    this.weak.delete(object);
    return super.delete(id);
  }

  /**
   * Check if an entry exists.
   * @param {String|Object} key
   * @returns {Boolean}
   */
  has(key: V | T): boolean {
    if (this.isIndex(key)) {
      return super.has(key);
    } else if (this.isValue(key)) {
      return this.weak.has(key);
    }
    return false;
  }

  /**
   * Clear the map.
   */
  clear() {
    super.forEach((value) => this.weak.delete(value));
    super.clear();
  }
}

export default IndexMap;
