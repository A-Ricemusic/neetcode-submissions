class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        while len(stones) > 1:
            stones = sorted(stones)
            bigStone = stones.pop()
            littleStone = stones.pop()
            if bigStone == littleStone:
                continue
            newStone = bigStone - littleStone
            stones.append(newStone)
        if len(stones) == 1:
            return stones[0]
        else:
            return 0
            
        