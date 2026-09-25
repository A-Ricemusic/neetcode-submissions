class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     * nums = [3,1,4,2], p = 6
     * total = 10
     * remain = 10 % 4 + 6 = 10
     * currSum = 0
     * res = 2
     * {
     * 0: -1
     * 9: 0
     * 
     * }
     */
    minSubarray(nums, p) {
        const map = new Map();
        const total = nums.reduce((a,b) => a + b, 0)
        const remain = (total % p);
        if (remain === 0) return 0;
        map.set(0,-1);
        let currSum = 0;
        let res = nums.length;

        for (let i = 0; i < nums.length; i++) {
            currSum = (currSum + nums[i]) % p;
            let prefix = (currSum - remain + p) % p
            if (map.has(prefix)) {
                res = Math.min(res, i - map.get(prefix));
            }
            map.set(currSum, i)
        }

        return res === nums.length? -1 : res;
    }
}
