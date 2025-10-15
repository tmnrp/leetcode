const groupAnagrams = function (strs: Array<string>) {
  const myMap = new Map<string, Array<string>>();
  for (const word of strs) {
    const count = new Array(26).fill(0);
    for (const ch of word) {
      count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.join("#");
    if (!myMap.has(key)) myMap.set(key, []);
    myMap.get(key)?.push(word);
  }

  return [...myMap.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
console.log(groupAnagrams(["bddddddddddddddd", "bbbbbbbbbbbbbbbc"]));
