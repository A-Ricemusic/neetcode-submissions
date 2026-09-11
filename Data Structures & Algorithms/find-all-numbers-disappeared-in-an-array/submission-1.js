class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const hashMap = new Map()
        for (let i = 1; i <= nums.length; i++) {
            hashMap.set(i, 0);
        }

        for (const num of nums) {
            hashMap.set(num, (hashMap.get(num) ?? 0) + 1)
        }
        const res = [];
        for (const k of hashMap.keys()) {
            if (hashMap.get(k) === 0) {
                res.push(parseInt(k))
            }
        }

        return res;
    }
}
