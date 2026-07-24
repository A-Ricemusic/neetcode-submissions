class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);

        let res = []
        for (let i = 0; i < nums.length; i++) {
            if ((i !== 0) && (nums[i] > 0 || (nums[i] === nums[i - 1]))) {
                continue
            }
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right]
                if (sum > 0) {
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    res.push([nums[i], nums[left], nums[right]])
                    left++;
                    right--;
                    while (left < right && nums[left - 1] === nums[left]) {
                        left++
                    }
                }
            }
        }

        return res
    }
}
