class Solution:
    def reverseBits(self, n: int) -> int:
        numInBi = []

        for i in range(32):
            if (1 << i) & n:
                numInBi.append("1")
            else:
                numInBi.append("0")
        return int("".join(numInBi), 2)