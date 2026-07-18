class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        count = defaultdict(int)

        for num in nums:
            count[num] += 1

            if len(count) > 2:
                newCount = defaultdict(int)
                for k, v in count.items():
                    if v > 1:
                        newCount[k] = v - 1
                count = newCount
        res = []
        for num in count.keys():
            if nums.count(num) > len(nums) // 3:
                res.append(num)
        
        return res
        