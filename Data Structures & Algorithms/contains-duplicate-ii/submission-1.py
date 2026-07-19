class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        myDict = defaultdict(int)

        for idx, num in enumerate(nums):
            if num in myDict:
                if abs(idx - myDict[num]) <= k:
                    return True
                myDict[num] = idx
            else:
                myDict[num] = idx
        return False
        