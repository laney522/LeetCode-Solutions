/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    // helper function for backtracking
    function backtrack(currentCombo, startIndex, remainingTarget) {
        //If remaining target is 0, we found a valid combination
        if (remainingTarget === 0) {
            result.push([...currentCombo]); // copy the array
            return;
        }

        // Loop through the candidates starting from startIndex
        for (let i = startIndex; i < candidates.length;  i++) {
            let num = candidates[i];

            // If the current number is greater than remaining target, skip it
            if (num > remainingTarget) continue;

            // Choose the current number
            currentCombo.push(num);

            // Recurse with the same index i (we can reuse the same number)
            backtrack(currentCombo, i, remainingTarget - num);

            // Backtrack: remove the last number to try the next candidate
            currentCombo.pop();
        }
    }

    // Start the backtracking with an empty combination
    backtrack([], 0, target);

    return result;
};