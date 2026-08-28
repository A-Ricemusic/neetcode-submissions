class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const hashMap = new Map();
        let stack = [];

        for (const num1 of nums2) {
            while (stack.length !== 0 && stack.at(-1) < num1) {
                const num2 = stack.pop();
                hashMap.set(num2, num1);
            }
            stack.push(num1);
        }

        while (stack.length !== 0) {
            const num3 = stack.pop()
            hashMap.set(num3, -1)
        }

        const res = [];
        for (const num4 of nums1) {
            res.push(hashMap.get(num4))
        }

        return res;

    }
}
