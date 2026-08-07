class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let res: number[][] = []

        const dfs = (i: number, curr: number[]): void => {
            if (i === nums.length) {
                res.push([...curr])
                return
            }

            dfs(i + 1, curr)
            curr.push(nums[i]);
            dfs(i + 1, curr);
            curr.pop()
        }

        dfs(0,[])

        return res;


    }
}
