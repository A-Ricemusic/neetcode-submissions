class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        nums.sort((a,b) => a - b)
        if (nums[0] > 1) {
            return 1
        }

        console.log(nums)

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] >= (nums[i - 1] + 2)) {
                let curr: number = nums[i - 1] + 1
                 while (curr !== nums[i]) {
                    if (curr > 0) {
                        return curr
                    } else {
                        curr++;
                    }
                 }
            }
        }

        if (nums[nums.length - 1] + 1 > 0) {
            return nums[nums.length - 1] + 1
        } else {
            return 1
        }
        
    }
}
