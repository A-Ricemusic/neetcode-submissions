class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     *
     * [-3, 0, 1,2,3,3] k = 3
     *
     * nums = [-1,-1,-1,1,1,1] k = 2
     *
     */
    fourSum(nums: number[], target: number): number[][] {
        if (nums.length < 4) return [];
        let res: number[][] = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            for (let j: number = i + 1; j < nums.length - 1; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                let l: number = j + 1;
                let r: number = nums.length - 1;

                while (l < r) {
                    let currSum: number = nums[i] + nums[j] + nums[l] + nums[r];
                    if (currSum === target) {
                        res.push([nums[i], nums[j], nums[l], nums[r]]);
                        l++;
                        r--;
                        while (l < r && nums[l] === nums[l - 1]) {
                            l++;
                        }

                        while (l < r && nums[r] === nums[r + 1]) {
                            r--;
                        }
                    } else if (currSum < target) {
                        l++;
                    } else {
                        r--;
                    }
                }
            }
        }

        return res;
    }
}
