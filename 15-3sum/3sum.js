/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const tripletsObj = {};

    nums.sort((a, b) => a - b);  // assending order. This is an arrow function(a shorthand for a comparison function)

    for (let i = 0; i < nums.length; i++) {
        const target = nums[i];

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const nLeft = nums[left];
            const nRight = nums[right];

            if (nLeft + nRight + target === 0) {
                const newTriples = [target, nLeft, nRight];
                const triplesKey = newTriples.join(',');

                if (!(triplesKey in tripletsObj)) {
                    tripletsObj[triplesKey] = newTriples;
                }

                left++;
            }

            if (nLeft + nRight < -target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return Object.values(tripletsObj);

};