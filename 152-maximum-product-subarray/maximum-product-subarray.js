/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const n  = nums.length;

    // Initialize the running products
    let leftProduct = 1;
    let rightProduct = 1;

    // start with the first element as the initial max
    let maxProduct = nums[0];

    // Pass 1: Left to Right
    for (let i = 0; i < n; i++) {
        leftProduct *= nums[i];
        maxProduct = Math.max(maxProduct, leftProduct);

        // Reset if product becomes 0
        if (leftProduct === 0) {
            leftProduct = 1;
        }
    }

    // Pass 2: Right to left
    for (let i = n - 1; i >= 0; i--) {
        rightProduct *= nums[i];
        maxProduct = Math.max(maxProduct, rightProduct);

        // Reset if product becomes 0
        if (rightProduct === 0) {
            rightProduct = 1;
        }
    }

    return maxProduct;
};