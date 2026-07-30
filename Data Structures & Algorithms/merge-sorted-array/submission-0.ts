class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let p1: number = m - 1;
        let p2: number = n - 1;
        
        for (let p3 = m + n - 1; p3 >= 0; p3--) {
            if (p2 < 0) {
                break;
            }
            if (p1 < 0 || nums2[p2] > nums1[p1]) {
                nums1[p3] = nums2[p2]
                p2--;
            } else {
                nums1[p3] = nums1[p1]
                p1--;
            }
        }

    }
}
