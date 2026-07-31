class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {

        let l: number = 0;
        let r: number = 0;
        let currSum: number = nums[0];
        let res: number = Infinity;

        while (l !== nums.length - 1 || r !== nums.length - 1) {
            //console.log("total", currSum, "l",l,"r",r, "res", res)
            if (currSum >= target) {
                res = Math.min(res, r - l + 1)
            }

            if (r === l) {
                r++;
                currSum += nums[r];
                continue;
            }

            if (r === nums.length - 1) {
                currSum -= nums[l];
                l++;
                continue;
            }

            if (currSum < target) {
                r++;
                currSum += nums[r];
            } else {
                currSum -= nums[l];
                l++;
            }
        }

        if (currSum >= target) {
                res = Math.min(res, r - l + 1)
        }

        return res !== Infinity? res : 0;
        
    }
}
