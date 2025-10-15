const romanToInt = function (s: string) {
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
    const currV = obj[arr[i]];
    const nextV = obj[arr[i + 1]] || 0;

    num = num + (nextV > currV ? -currV : currV);
  }

  return num;
};

console.log(romanToInt("IV"));
console.log(romanToInt("VI"));
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
