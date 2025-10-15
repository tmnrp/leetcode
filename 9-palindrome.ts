const isPalindrome = (x: number) => {
  const arr = x.toString().split("");
  let j = arr.length - 1;
  for (let i = 0; i < j; i++) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    j--;
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
