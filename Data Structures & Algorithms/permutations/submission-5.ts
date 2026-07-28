class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        let res: number[][] = [];
        let n: number = nums.length;
        let cache: boolean[] = new Array(n).fill(false)

        const dfs = (curr: number[]) => {
            if (curr.length === n) {
                res.push([...curr])
                return
            }
            for (let i = 0; i < n; i++) {
                if (!cache[i]) {
                    cache[i] = true
                    curr.push(nums[i])
                    dfs(curr)
                    cache[i] = false
                    curr.pop()
                }
            }
        };

        dfs([])
        return res;

    }
}
