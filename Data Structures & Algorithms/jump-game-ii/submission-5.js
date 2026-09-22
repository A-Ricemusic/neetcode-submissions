class Solution {
    /**
     * @param {number[]} nums
     * @return {number}

     */
    jump(nums) {
        let res = 0;
        let l = 0;
        let r = 0;
        const n = nums.length;
        while (r < n - 1) {
            let farthest = l;
            for (let i = l; i <= r; i++) {
                farthest = Math.max(farthest, i + nums[i]);
            }
            l = r + 1;
            r = farthest
            res++;
        }

        return res;
    }
}
