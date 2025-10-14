/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const mymap = new Map();
  for (const word of strs) {
    const key = word.split("").sort().join("");

    if (!mymap.has(key)) mymap.set(key, []);

    mymap.get(key).push(word);
  }

  return [...mymap.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
console.log(groupAnagrams(["bddddddddddddddd", "bbbbbbbbbbbbbbbc"]));
