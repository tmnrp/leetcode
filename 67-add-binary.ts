function addBinary(a: string, b: string): string {
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  const result: number[] = [];
  let c = 0;

  const len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) {
    let x = i > a.length - 1 ? 0 : +a[i]!;
    let y = i > b.length - 1 ? 0 : +b[i]!;

    if (x + y + c === 1) {
      result.push(1);
      c = 0;
    } else if (x + y + c === 0) {
      result.push(0);
      c = 0;
    } else if (x + y + c === 2) {
      result.push(0);
      c = 1;
    } else if (x + y + c === 3) {
      result.push(1);
      c = 1;
    }
  }

  if (c === 1) {
    result.push(c);
  }
  return result.reverse().join("");
}

console.log(addBinary("11", "1")); //a = "11", b = "1"
