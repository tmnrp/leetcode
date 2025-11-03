function convertToTitle(columnNumber: number): string {
  let res: string[] = [];
  while (columnNumber > 0) {
    const ch = (columnNumber - 1) % 26;
    res.push(String.fromCharCode("A".charCodeAt(0) + ch));

    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  //
  return res.reverse().join("");
}

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
