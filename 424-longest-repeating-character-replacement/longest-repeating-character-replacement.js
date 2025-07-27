/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;
    let freq = new Array(26).fill(0);

    for (let right = 0; right < s.length; right++) {
        let index = s.charCodeAt(right) - 65; // a = 65
        freq[index]++;

        maxCount = Math.max(maxCount, freq[index]);

        // If more than k letters need to be replaced, shrink the window
        while ((right - left + 1) - maxCount > k) {
            freq[s.charCodeAt(left) - 65]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }    

    return maxLength;
};