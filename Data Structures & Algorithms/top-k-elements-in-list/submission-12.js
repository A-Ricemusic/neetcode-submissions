class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * nums = [1,2,2,3,3,3], k = 2
     * [[],[1],[2],[3],[],[],[]]
     * {
     * 1: 1
     * 2: 2
     * 3: 3
     * }
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1}, () => [])
        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        for (const n in count) {
            freq[count[n]].push(parseInt(n))
        }

        let res = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const num of freq[i]) {
                res.push(num)
                if (res.length === k) break;
            }
            if (res.length === k) break;
        }

        return res;
    }
}
