function productExceptSelf(nums: number[]): number[] {
  const res = [];
  // for prefix times
  let prefixMulti = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefixMulti;
    prefixMulti = nums[i]! * prefixMulti;
  }

  // for sufix times
  let sufixMulti = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i]! * sufixMulti;
    sufixMulti = nums[i]! * sufixMulti;
  }

  return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
