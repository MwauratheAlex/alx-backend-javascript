export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // setters
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._code = code;
  }

  // methods
  toString() {
    return this._code;
  }
}
