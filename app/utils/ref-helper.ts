/**
 * Reference utils
 * components reference utils for
 * set component refs and use them at
 * other places. useful in global component
 * like loader, toast etc.
 * @format
 */

class RefHelper {
  static references: any = {};

  // Add component ref in "references" with there key value
  static addRef(key: string, ref: Object) {
    if (typeof key !== 'string') {
      throw new Error('key must be a string');
    }
    if (typeof ref !== 'object') {
      throw new Error('ref must be a class reference');
    }
    this.references[key] = ref;
  }

  // Get component reference by key
  static getRef(key: string) {
    if (typeof key !== 'string') {
      throw new Error('key must be a string');
    }
    return this.references[key];
  }

  // Remove component ref
  static removeRef(key: string) {
    if (typeof key !== 'string') {
      throw new Error('key must be a string');
    }
    this.references[key] = undefined;
  }
}

export { RefHelper };
