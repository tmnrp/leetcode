const longestCommonPrefix = function (strs: Array<string>) {
  strs = strs.sort();
  const op: Array<string> = [];
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      break;
    }
    op.push(strs[0][i]);
  }
  return op.join("");
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
