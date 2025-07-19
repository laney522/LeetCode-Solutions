/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // target number found!!
        }

        // Left side is sorted, nums = [4,5,6,7,0,1,2]; target = 0
        if (nums[left] <= nums[mid]) { // 4 <= 7
            if (nums[left] <= target && target < nums[mid]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        // Right side is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};