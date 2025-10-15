function strStr(haystack: string, needle: string): number {
  if (
    haystack.length < needle.length ||
    (haystack.length === needle.length && haystack[0] !== needle[0])
  ) {
    return -1;
  }

  const arrHs = haystack.split("");
  const arrNdl = needle.split("");
  let index = -1;

  for (let i = 0, j = 0; i < arrHs.length; i++) {
    console.log(`i=${i} | ${arrHs[i]} === ${arrNdl[j]}`);
    if (arrHs[i] === arrNdl[j]) {
      if (index === -1) {
        index = i;
      }
      j++;
    } else {
      index = -1;
      j = 0;
    }
  }

  return index;
}

console.log(strStr("leetcode", "leeto"));
// console.log(strStr("asadbutsad", "sad"));
