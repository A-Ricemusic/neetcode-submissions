class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * 
     * [4,5,6,1,2,3]
     */
    findMin(nums: number[]): number {
        let l: number = 0;
        let r: number = nums.length -1;
        let res: number = -1


        while (l <= r) {
            const mid: number = Math.floor(l + (r - l) / 2);
            if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) {
                return nums[mid];
            }

            if (nums[mid] >= nums[0]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
            console.log(l,r)
        }
        return nums[0]
    }
}
