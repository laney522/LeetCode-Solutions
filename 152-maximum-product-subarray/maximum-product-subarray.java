class Solution {
    public int maxProduct(int[] nums) {
        int n = nums.length;

        // Initialize variables to track the running product
        int leftProduct = 1;
        int rightProduct = 1;

        // Start with the first number as the initial max
        int maxProduct = nums[0];

        // Pass 1: Left to Right
        for (int i = 0; i < n; i++) {
            leftProduct *= nums[i];
            maxProduct = Math.max(maxProduct, leftProduct);

            // Reset product if we hit zero
            if (leftProduct == 0) {
                leftProduct = 1;
            }
        }

        // Pass 2: Right to Left
        for (int i = n - 1; i >= 0; i--) {
            rightProduct *= nums[i];
            maxProduct = Math.max(maxProduct, rightProduct);

            // Reset product if we hit zero
            if (rightProduct == 0) {
                rightProduct = 1;
            }
        }

        return maxProduct;
    }
}
