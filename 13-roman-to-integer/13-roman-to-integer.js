var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let num = 0;
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length) {
      if (arr[i] === "I") {
        if (arr[i + 1] === "V") {
          num += 4;
          i += 1;
          continue;
        }
        if (arr[i + 1] === "X") {
          num += 9;
          i += 1;
          continue;
        }
      }
      if (arr[i] === "X") {
        if (arr[i + 1] === "L") {
          num += 40;
          i += 1;
          continue;
        }
        if (arr[i + 1] === "C") {
          num += 90;
          i += 1;
          continue;
        }
      }
      if (arr[i] === "C") {
        if (arr[i + 1] === "D") {
          num += 400;
          i += 1;
          continue;
        }
        if (arr[i + 1] === "M") {
          num += 900;
          i += 1;
          continue;
        }
        //
      }
    }
    num = num + obj[arr[i]];
  }

  return num;
};

console.log(romanToInt("IV"));
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
