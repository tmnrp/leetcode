interface Array<T> {
  last(): T | -1;
}

// @ts-ignore
Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};
