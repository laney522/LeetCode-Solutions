class Solution:
    def countSubstrings(self, s: str) -> int:
        count = len(s)
        #check for odd length palindrome
        for i in range(len(s)):
            left = i-1
            right = i+1
            while (left >= 0 and left<len(s)) and (right >= 0 and right < len(s) and s[left]==s[right]):
                count += 1
                left -= 1
                right += 1

        #check for even length palindrome
        for i in range(len(s)):
            left = i
            right = i+1
            while (left >= 0 and left<len(s)) and (right >= 0 and right < len(s) and s[left]==s[right]):
                count += 1
                left -= 1
                right += 1

        return count        #return the final result
        