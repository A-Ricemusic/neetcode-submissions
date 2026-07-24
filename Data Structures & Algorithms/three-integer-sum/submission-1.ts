class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b) => a - b);
        const res: number[][] = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left: number = i + 1;
            let right: number = nums.length - 1;
            while (left < right) {
                if (nums[i] + nums[left] + nums[right] > 0) {
                    right--
                } else if (nums[i] + nums[left] + nums[right] < 0) {
                    left++
                } else {
                    res.push([nums[i],nums[left],nums[right]])
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                }
            }
        }
        return res;
    }
}
