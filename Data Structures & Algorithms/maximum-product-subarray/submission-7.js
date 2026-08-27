class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = Math.max(...nums);
        let currMin = 1;
        let currMax = 1;

        for (const num of nums) {
            const tmp = num * currMax;
            currMax = Math.max(tmp, currMin * num, num)
            currMin = Math.min(tmp,currMin * num, num)
            res = Math.max(res, currMax)
        }

        return res;
    }
}
