class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums: number[]): number {
        

        let dfs = (idx, total) => {
            if (idx === nums.length) return total;
            return dfs(idx + 1, total) + dfs(idx + 1, total ^ nums[idx])
        }
        
        return dfs(0,0)
    }
}
