class Solution:
    from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}  # Dictionary to group anagrams

        for word in strs:
            # Sort the word to create a key
            sorted_word = ''.join(sorted(word))

            # If the key is not in the map, create it
            if sorted_word not in map:
                map[sorted_word] = []

            # Add the original word to the list
            map[sorted_word].append(word)

        # Return all grouped anagrams
        return list(map.values())