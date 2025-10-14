/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const mymap = new Map();
  for (const word of strs) {
    const count = new Array(26).fill(0);
    for (ch of word) {
      count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.join("#");
    if (!mymap.has(key)) mymap.set(key, []);
    mymap.get(key).push(word);
  }

  return [...mymap.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
console.log(groupAnagrams(["bddddddddddddddd", "bbbbbbbbbbbbbbbc"]));
