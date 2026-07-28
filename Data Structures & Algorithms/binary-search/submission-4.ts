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
        let l: number = 0;
        let r: number = nums.length - 1;

        while (l <= r) {
            const mid: number = Math.ceil((r + l) / 2);
            console.log(l,r,mid)
            if (target === nums[mid]) {
                return mid;
            } else if (target > nums[mid]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return -1
    }
}
