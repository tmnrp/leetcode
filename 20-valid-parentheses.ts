const isValid = function (s: string) {
  const arr: Array<string> = s.split("");
  if (arr.length % 2 !== 0) return false;

  const myStack: Array<String> = [];
  const myMap: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const ch of arr) {
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
