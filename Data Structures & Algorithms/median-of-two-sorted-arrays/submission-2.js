class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }
        const m = nums1.length;
        const n = nums2.length;
        const total = m + n;
        const half = Math.floor(total / 2);
        let l = 0;
        let r = m - 1;

        while (true) {
            const m1 = Math.floor(l + (r - l) / 2);
            const m2 = half - m1 - 2;
            const aLeft = m1 >= 0? nums1[m1] : -Infinity;
            const aRight = m1 + 1 < m? nums1[m1 + 1] : Infinity;
            const bLeft = m2 >= 0? nums2[m2] : -Infinity;
            const bRight = m2 + 1 < n? nums2[m2 + 1] : Infinity

            if (aLeft <= bRight && bLeft <= aRight) {
                if (total % 2 === 0) {
                    return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
                }
                return Math.min(aRight,bRight)

            } else if (aLeft > bRight) {
               r = m1 - 1 
            } else {
                l = m1 + 1
            }
        }

    }
}
