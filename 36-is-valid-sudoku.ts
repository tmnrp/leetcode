function isValidSudoku(board: string[][]) {
  const r = 9;
  const c = 9;
  const g = 3;

  // all
  const fqRow: Array<any> = [];
  const fqCol: Array<any> = [];
  const fqGrid: Array<any> = [];
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      const kv: any = board?.[i]?.[j];
      if (kv === ".") {
        continue;
      }

      // ---------------------------------------------------- process rows
      if (fqRow[i] === undefined) {
        fqRow[i] = {};
      }
      if (!fqRow[i][kv]) {
        fqRow[i][kv] = 0;
      }
      fqRow[i][kv] = fqRow[i][kv] + 1;
      if (fqRow[i][kv] > 1) {
        console.log({ fqRow, i, kv, r: fqRow[i][kv] });
        return false;
      }

      // ---------------------------------------------------- process cols
      if (fqCol[j] === undefined) {
        fqCol[j] = {};
      }
      if (!fqCol[j][kv]) {
        fqCol[j][kv] = 0;
      }
      fqCol[j][kv] = fqCol[j][kv] + 1;
      if (fqCol[j][kv] > 1) {
        console.log({ fqCol, j, kv, r: fqCol[j][kv] });
        return false;
      }

      // ---------------------------------------------------- process squares
      const x = Math.floor(i / g) * g + Math.floor(j / g);
      if (fqGrid[x] === undefined) {
        fqGrid[x] = {};
      }
      if (!fqGrid[x][kv]) {
        fqGrid[x][kv] = 0;
      }
      fqGrid[x][kv] = fqGrid[x][kv] + 1;
      if (fqGrid[x][kv] > 1) {
        console.log(`ERROR || [${i}][${j}]:${kv} ===> ${x}`);
        return false;
      }
    }
  }

  //
  return true;
}

// console.log(isValidSudoku([["3"], ["1"], ["2"]]));

// console.log(
//   isValidSudoku([
//     ["1", "2", "3", "4"],
//     ["6", "1", "2", "5"],
//     ["7", "8", "1", "2"],
//     ["2", "9", "10", "1"],
//   ]),
// );

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
