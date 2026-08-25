class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * pos = 
     * nums = [-3,1,3,-2,-5,2,-4,4]
     *        [1,-3,3,-2,-5,4,-4,4,-2]
     *         
     */
    rearrangeArray(nums) {
        const pos = []
        const neg = []
        for (const num of nums) {
            if (num > 0) {
                pos.push(num)
            } else if (num < 0) {
                neg.push(num)
            }
        }
        for (let i = 0; i < pos.length; i++) {
            nums[2 * i] = pos[i]
            nums[(2 * i) + 1] = neg[i]
        }

        return nums
    }
}
