class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        res = []
        heapq.heapify(nums)
        for i in range(len(nums)):
            num = heapq.heappop(nums)
            res.append(num)   
        return res
        