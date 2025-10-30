function strStr(haystack: string, needle: string): number {
  if (
    haystack.length < needle.length ||
    (haystack.length === needle.length && haystack[0] !== needle[0])
  ) {
    return -1;
  }

  return haystack.indexOf(needle);
}

console.log(strStr("leetcode", "leeto"));
// console.log(strStr("asadbutsad", "sad"));
