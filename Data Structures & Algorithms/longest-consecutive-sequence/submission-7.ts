class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0
        }
        nums.sort((a,b) => a - b)
        let res: number = -1
        let currNumber: number = nums[0]
        let count: number = 1
        console.log(nums)
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === currNumber + 1) {
                currNumber = currNumber + 1
                count += 1
                res = Math.max(res, count)
            } else if (nums[i] === currNumber) {
                currNumber = nums[i]
            } else {
                count = 1
                currNumber = nums[i]
            }
        }
        return Math.max(res, count)
    }
}
