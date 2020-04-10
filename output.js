function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Base {
  constructor(value) {
    _defineProperty(this, "get", void 0);

    _defineProperty(this, "value", void 0);

    this.value = value;

    this.get = () => value;
  }

}

class Extension extends Base {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "get", void 0);
  }

}

const b = new Base(123);
console.log("base get", b.get());
const e = new Extension(123);
console.log("extension get", e.get());
