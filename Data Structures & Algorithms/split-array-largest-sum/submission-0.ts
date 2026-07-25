class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    canSplit(largest: number, nums: number[], k: number): boolean {
        let subarray = 0;
        let currSum = 0;
        for (let num of nums) {
            currSum += num
            if (currSum > largest) {
                subarray += 1
                currSum = num
            }
        }
        return subarray + 1 <= k;
    }

    splitArray(nums: number[], k: number): number {
        let l: number = Math.max(...nums);
        let r: number = nums.reduce((acc, num) => num + acc, 0);
        let res: number = r;

        while (l <= r) {
            let mid: number = Math.floor(l + (r - l) / 2)
            if (this.canSplit(mid, nums, k)) {
                res = mid;
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return res;
    }
}
