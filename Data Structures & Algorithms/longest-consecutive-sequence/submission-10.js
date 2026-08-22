class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashSet = new Set(nums)
        let res = 0
        for (const num of hashSet) {
            if (!hashSet.has(num - 1)) {
                let length = 1
                while (hashSet.has(num + length)) {
                    length++;
                }
                res = Math.max(res, length)
            }
        }

        return res
    }
}
