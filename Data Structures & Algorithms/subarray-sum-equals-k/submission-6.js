class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     * nums = [2,-1,1,2] k = 2
     * res = 4
     * total = 4
     * comp = 2
     * hashMap = {
     *  0: 1
     *  2: 2
     *  1: 1
     * }
     */
    subarraySum(nums, k) {
        let res = 0
        const hashMap = new Map()
        hashMap.set(0, 1)
        let total = 0
        for (const num of nums) {
            total += num;
            const comp = total - k;
            if (hashMap.has(comp)) {
                res += hashMap.get(comp)
            }
            hashMap.set(total, (hashMap.get(total) || 0) + 1);
        }

        return res;
    }
}
