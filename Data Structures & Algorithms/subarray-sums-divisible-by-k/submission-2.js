class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums, k) {
        let total = 0
        let res = 0
        const hashMap = new Map()
        hashMap.set(0,1)
        for (const num of nums) {
            total += num;
            let remain = total % k;
            if (remain < 0) remain += k;
            if (hashMap.has(remain)) {
                res += hashMap.get(remain);
            }
            hashMap.set(remain, (hashMap.get(remain) || 0) + 1)

        }
        return res;
    }
}
