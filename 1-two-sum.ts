const twoSum = function (nums: Array<number>, target: number) {
  const mymap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - (nums[i] || 0);
    if (mymap.has(difference)) {
      return [mymap.get(difference), i];
    } else {
      mymap.set(nums[i], i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
