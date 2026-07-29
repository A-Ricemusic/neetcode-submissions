class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        let a: number[] = nums1;
        let b: number[] = nums2;
        let total: number = a.length + b.length;
        let half: number = Math.floor(total / 2)

        if (a.length > b.length) {
            let tmp: number[] = a
            a = b
            b = tmp
        }

        let l: number = 0;
        let r: number = a.length - 1;

        while (true) {
            const i: number = Math.floor(l + (r - l) / 2)
            const j: number = half - i - 2;

            const aLeft: number = i >= 0? a[i] : -Infinity;
            const aRight: number = i + 1 < a.length? a[i + 1]: Infinity;
            const bLeft: number = j >= 0? b[j]: -Infinity;
            const bRight: number = j + 1 < b.length? b[j + 1]: Infinity;

            if (aLeft <= bRight && bLeft <= aRight) {
                if (total % 2 === 0) {
                    return ((Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2)
                } else {
                    return Math.min(aRight, bRight);
                }
            } else if (aLeft > bRight) {
                r = i - 1
            } else {
                l = i + 1
            }
        }

        return -1;
    }
}
