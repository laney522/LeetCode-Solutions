/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}; // This will group words by their sorted letters

    for (let word of strs) {
        // Sort the letters in the word to create a key
        let sorted = word.split('').sort().join('');

        // If key doesn't exist, create it with an empty array
        if (!map[sorted]) {
            map[sorted] = [];
        }

        // Push the word into the group
        map[sorted].push(word);
    }

    // Return all grouped anagrams as an array
    return Object.values(map);
};