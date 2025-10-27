const topKFrequent = (nums: Array<number>, k: number) => {
  if (k === nums.length) {
    return nums;
  }

  //
  const fMap = new Map<number, number>();

  for (const n of nums) {
    fMap.set(n, (fMap.get(n) || 0) + 1);
  }

  const fArr: Array<Array<number>> = new Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (let [k, f] of fMap) {
    fArr[f]?.push(k);
  }

  const result: Array<number> = [];
  for (let i = fArr.length - 1; i >= 0 && result.length < k; i--) {
    if (fArr[i]?.length) {
      result.push(...fArr[i]!);
    }
  }

  return result;
};

console.log(topKFrequent([], 1));
console.log(topKFrequent([10, 11, 12, 13, 14], 2));
console.log(topKFrequent([6, 6, 11, 9, 12, 7, 7], 2));
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
console.log(topKFrequent([4, 4, 4, 5, 5, 5, 6, 7], 2));
