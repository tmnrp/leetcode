const longestConsecutive = (nums: Array<number> = []) => {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }

  const setNums = new Set(nums);

  let lcs = 1;
  for (const num of setNums) {
    const previousNum = num - 1;
    if (!setNums.has(previousNum)) {
      let currLcs = 1;
      let nextNum = num + 1;
      while (setNums.has(nextNum)) {
        nextNum++;
        currLcs++;
      }

      lcs = Math.max(lcs, currLcs);
    }
  }

  return lcs;
};

console.log(longestConsecutive([1, 0]));
console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
console.log(longestConsecutive([1, 1, 0, 0, 0, 0]));
