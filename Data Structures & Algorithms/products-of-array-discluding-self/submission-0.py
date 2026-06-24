class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        hasZeros = False
        zeroCount = 0
        for num in nums:
            if num == 0:
                hasZeros = True
                zeroCount += 1


        #zeros:
        if hasZeros:
            if zeroCount > 1:
                for i in range(len(nums)):
                    nums[i] = 0
                return nums
            else:
                product = 1
                for num in nums:
                    if num == 0:
                        continue
                    product *= num
                for i in range(len(nums)):
                    if nums[i] == 0:
                        nums[i] = product
                    else:
                        nums[i] = 0
                return nums


        #no zeros
        if not hasZeros:
            product = 1
            for num in nums:
                product *= num
            
            for i in range(len(nums)):
                element = product // nums[i]
                nums[i] = element
            
            return nums
        