class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * 
     * n = total nums in array
     * k = nums of frequency 1;
     * time: O(nlog(k)
     * space: o(n)
     */
    largestUniqueNumber(nums) {
    

        const hashMap = new Map();
        for (const num of nums) {
            hashMap.set(num, (hashMap.get(num) ?? 0) + 1);
        };

        const arr = []
        for (const [num,freq] of hashMap.entries()) {
            if (freq === 1) {
                arr.push(num)
            }
        }

        return arr.length === 0? -1 : Math.max(...arr)
    }
}
