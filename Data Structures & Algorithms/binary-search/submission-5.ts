class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     *
     * nums = [-1,0,3,5,9,12], target = 9, n = 6, l = 0, r = 5
     *
     */
    search(nums: number[], target: number): number {
        const binarySearch = (l: number, r: number): number => {
            const mid: number = Math.floor((r + l) / 2);
            if (l > r) {
                return -1;
            }
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                return binarySearch(mid + 1, r);
            } else if (nums[mid] > target) {
                return binarySearch(l, mid - 1);
            }
        };

        return binarySearch(0, nums.length - 1);
    }
}
