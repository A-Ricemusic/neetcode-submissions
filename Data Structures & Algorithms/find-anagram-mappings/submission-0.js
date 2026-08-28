class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     * 
     * o(n) time and space
     */
    anagramMappings(nums1, nums2) {
        const hashMap = new Map()
        for (let i = 0; i < nums2.length; i++) {
            if (!hashMap.has(nums2[i])) {
                hashMap.set(nums2[i], [])
            }
            hashMap.get(nums2[i]).push(i)
        }
        const res = []
        for (const num of nums1) {
            res.push(hashMap.get(num).pop())
        }
        return res;
    }
}
