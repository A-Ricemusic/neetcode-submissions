"""
[1,0,1,2]
count [1,2,1]


"""



class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        count = [0] * 3
        for num in nums:
            count[num] += 1

        j = 0
        for i in range(3):
            while count[i] != 0:
                nums[j] = i
                count[i] -= 1
                j += 1

        