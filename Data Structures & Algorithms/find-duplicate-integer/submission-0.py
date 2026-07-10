class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        mySet = set()
        for num in nums:
            if num in mySet:
                return num
            mySet.add(num)
        