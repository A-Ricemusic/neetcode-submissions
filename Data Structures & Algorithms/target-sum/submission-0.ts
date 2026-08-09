class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        
        const memo: Map<string,number> = new Map<string,number>;

        const dfs = (i: number, curr: number): number => {
            if (i === nums.length) {
                return target === curr? 1 : 0;
            }

            const key: string = `${i},${curr}`;
            if (memo.has(key)) return memo.get(key)

            const res: number = dfs(i + 1, curr - nums[i]) 
            + dfs(i + 1, curr + nums[i]);

            memo.set(key,res)
            return res;
        }



        return dfs(0,0)

    }
}
