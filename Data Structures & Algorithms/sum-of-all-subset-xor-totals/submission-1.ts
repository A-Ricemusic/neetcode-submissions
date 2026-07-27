class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums: number[]): number {

        const dfs = (idx: number, total: number): number => {

            if (idx === nums.length) {
                return total
            }

            return dfs(idx + 1, total) + dfs(idx + 1, total ^ nums[idx])

        }


        return dfs(0,0)
    }
}
