class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums: number[]): number[][] {

        const res: number[][] = []
        nums.sort((a,b) => a - b);

        const dfs = (i: number): void => {
            if (i === nums.length) {
                res.push([...nums]);
                return;
            }

            for (let j = i; j < nums.length; j++) {
                if (j > i && nums[i] === nums[j]) continue;
                [nums[i], nums[j]] = [nums[j], nums[i]]
                dfs(i + 1);
            }

            for (let j = nums.length - 1; j > i; j--) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }

        dfs(0)
        return res
    }
}
