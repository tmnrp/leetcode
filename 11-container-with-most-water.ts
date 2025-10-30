function maxArea(height: number[]): number {
  let maxAreaOfWater = 0;
  if (height.length <= 1) {
    return 0;
  }

  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const diff = r - l;
    if (height[l]! <= height[r]!) {
      maxAreaOfWater = Math.max(maxAreaOfWater, height[l]! * diff);
      l++;
    } else if (height[l]! > height[r]!) {
      maxAreaOfWater = Math.max(maxAreaOfWater, height[r]! * diff);
      r--;
    }
  }

  //
  return maxAreaOfWater;
}

console.log(maxArea([1, 2, 4, 3])); // 6
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
// console.log(maxArea([1, 1])); // 1
