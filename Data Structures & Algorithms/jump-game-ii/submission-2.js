class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * nums = [2,2,5,1,1,1]
     * l = 3
     * r = 7
     * res = 2
     * f = 7
     */
    jump(nums) {
        let res = 0;
        let l = 0;
        let r = 0;

        while (r < nums.length - 1) {
            let f = 0
            for (let i = l; i < r + 1; i++) {
                f = Math.max(f, i + nums[i])
            }
            l = r + 1
            r = f
            res++
        }

        return res;
    }
}
