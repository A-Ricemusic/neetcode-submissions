class Solution:
    def validWordSquare(self, words: List[str]) -> bool:
        for word in range(len(words)):
            for char in range(len(words[word])):
                if char >= len(words) or word >= len(words[char]) or words[word][char] != words[char][word]:
                    return False
        return True
            

        