function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !/^[a-z0-9]$/.test(s[l]!)) {
      l++;
    }
    while (l < r && !/^[a-z0-9]$/.test(s[r]!)) {
      r--;
    }

    if (s[l] !== s[r]) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome(".,"));
