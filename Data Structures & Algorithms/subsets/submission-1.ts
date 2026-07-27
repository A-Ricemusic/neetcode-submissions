class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {

        let res: number[][] = []

        const dfs = (idx: number, curr: number[]): void => {
            if (idx === nums.length) {
                res.push([...curr]);
                return
            }
            
            
            dfs(idx + 1, curr)
            curr.push(nums[idx])
            dfs(idx + 1, curr)
            curr.pop()
            return

        }

        dfs(0,[])
        return res
    }
}
