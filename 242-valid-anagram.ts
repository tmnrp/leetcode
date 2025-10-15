const isAnagram = function (s: string, t: string) {
  if (s.length !== t.length) {
    return false;
  }

  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    arr[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  return arr.some((v) => v !== 0) ? false : true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
