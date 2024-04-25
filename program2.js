function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    const a = Math.abs(nums[i]);
    
    if (a <= n) {
      nums[a - 1] = -Math.abs(nums[a - 1]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  
  return n + 1;

}

module.exports = smallestMissingPositiveInteger;
