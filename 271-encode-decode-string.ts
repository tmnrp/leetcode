const encode = (strs: Array<string>) => {
  const arr = [];
  for (const word of strs) {
    arr.push(`${word.length}#`);
    arr.push(word);
  }
  return arr.join("");
};

const decode = (str: string) => {
  const res = [];
  let i = 0;
  while (str.length > 0) {
    if (str[i] === "#") {
      const wordCount = +str.slice(0, i);
      res.push(str.substring(i + 1, i + 1 + wordCount));
      str = str.substring(i + 1 + wordCount);
      i = 0;
    }

    i++;
  }

  return res;
};

console.log(encode(["neet", "code", "love", "you"]));
console.log(decode("12#neetneetneet4#code4#love3#you"));
