/**
 * @param {number[]} nums
 * @return {number}
 */
// 53. Maximum Subarray - Kadane's Algorithm
// O(n) time, O(1) space

var maxSubArray = function(nums) {
  // Start both with the first element to handle all-negative arrays correctly
  let curr = nums[0]; // current best ending here
  let best = nums[0]; // global best so far

  for (let i = 1; i < nums.length; i++) {
    // Option 1: extend previous subarray (curr + nums[i])
    // Option 2: start new subarray from nums[i]
    curr = Math.max(nums[i], curr + nums[i]);

    // Update global maximum
    best = Math.max(best, curr);
  }

  return best;
};