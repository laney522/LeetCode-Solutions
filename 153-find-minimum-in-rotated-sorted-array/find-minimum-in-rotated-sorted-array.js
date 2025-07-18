/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    // If the array is not rotated (already sorted), return the first elemment.
    if (nums[left] <= nums[right]) {
        return nums[left];
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        //If middle element is greater than the rightmost, min is to the right
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            //If middle element is less than or equal to rightmost, min is at mid or left side
            right = mid;
        }
    }

    // When left == right, we've found the smalleest element
    return nums[left];
};