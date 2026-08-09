class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const total: number = nums.reduce((a,x) => a + x, 0);
        if (total % 2 === 1) return false;
        const target: number = total / 2;
        const memo: Map<string,boolean> = new Map<string,boolean>;

        const dfs = (i: number,curr: number) => {
            if (curr === target) return true;
            if (i >= nums.length || curr > target) return false;
            const key: string = `${i},${curr}`;
            if (memo.has(key)) return memo[key];
            let res: boolean = dfs(i + 1, curr) || dfs(i + 1, curr + nums[i]);
            memo.set(key,res)
            return res;
        }



        return dfs(0,0)
    }
}
