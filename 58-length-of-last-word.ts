function lengthOfLastWord(s: string): number {
  const arrStr = s.split(" ");
  let len = 0;
  for (let i = arrStr.length - 1; i >= 0; i--) {
    if (arrStr[i]!.trim() === "") continue;
    len = arrStr[i]!.length;
    break;
  }

  return len;
}

//
console.log(lengthOfLastWord("a"));
