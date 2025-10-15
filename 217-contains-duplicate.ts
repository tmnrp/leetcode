const containsDuplicate = function (nums: Array<number>) {
  return new Set(nums).size < nums.length;
};
