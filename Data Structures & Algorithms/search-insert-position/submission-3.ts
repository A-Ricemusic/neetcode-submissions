class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums: number[], target: number): number {
        // if (target > nums[nums.length - 1]) {
        //     return nums.length
        // }

        // if (target <= nums[0]) {
        //     return 0
        // }

        const binarySearch = (l: number,r: number): number => {
            const mid = Math.floor(l + (r - l) / 2)

            if (l > r) {
                return r + 1;
            }

            if (target === nums[mid]) {
                return mid
            } else if (target > nums[mid]) {
                return binarySearch(mid + 1,r)
            } else if (target < nums[mid]) {
                return binarySearch(l,mid - 1)
            }
        }

        return binarySearch(0,nums.length - 1)
    }
}
