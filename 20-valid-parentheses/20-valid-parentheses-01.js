/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = s.split("");
  if (arr.length % 2 !== 0) return false;

  const myStack = [];
  const myMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (ch of arr) {
    if (myMap[ch]) {
      if (myStack.pop() !== myMap[ch]) {
        return false;
      }
    } else {
      myStack.push(ch);
    }
  }

  return myStack.length === 0;
};

console.log(isValid("()[]{}"));
console.log(isValid("([)]"));
console.log(isValid("(("));
