class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        dict1 = Counter(s)
        dict2 = Counter(t)

        for char in dict1:
            if char not in dict2 or dict1[char] != dict2[char]:
                return False
        return True 
        