class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     * nums1 = [1,2,3,5,6]
     * nums2 = [2,3,4,7,8]
     * n = 10
     * half = 5
     * arr = [1,2,2,3,3,4,5,6,7,8]
     * 
     * 
     * 
     * nums1 = [1,2], nums2 = [3]
     * n = 3
     * half = 1
     * arr = [1,2,3]
     */
    findMedianSortedArrays(nums1, nums2) {
        // nums1 must be the SMALLER array
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }

        const total = nums1.length + nums2.length;
        const half = Math.floor(total / 2);
        let l = -1;
        let r = nums1.length - 1;
        while (true) {
            const m1 = Math.floor(l + (r - l) / 2);
            const m2 = half - m1 - 2;
            const leftPart1 = m1 >= 0 ? nums1[m1] : -Infinity;
            const leftPart2 =  m2 >= 0 ? nums2[m2] : -Infinity;
            const rightPart1 = m1 + 1 < nums1.length? nums1[m1 + 1] : Infinity;
            const rightPart2 = m2 + 1 < nums2.length? nums2[m2 + 1] : Infinity;
            if (leftPart1 <= rightPart2 && leftPart2 <= rightPart1) {
                if (total % 2 === 0) {
                    return (Math.max(leftPart1,leftPart2) + Math.min(rightPart1,rightPart2)) / 2
                } else {
                    return Math.min(rightPart1,rightPart2)
                }
            } else if (leftPart1 > rightPart2) {
                r = m1 - 1
            } else {
                l = m1 + 1
            }

        }
    }
}
