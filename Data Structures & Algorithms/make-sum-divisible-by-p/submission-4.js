class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minSubarray(nums, p) {
        const total = nums.reduce((a,b) => a + b, 0);
        const remain = total % p;
        if (remain === 0) return 0;
        const map = new Map();
        map.set(0,-1);
        let res = nums.length;
        let currSum = 0;
        for (let i = 0; i < nums.length; i++) {
            currSum = (currSum + nums[i]) % p;
            const prefix = (currSum - remain + p) % p;
            if (map.has(prefix)) {
                res = Math.min(res,i - map.get(prefix));
            }
            map.set(currSum,i);
        }

        return res === nums.length? -1 : res;
    }
}
