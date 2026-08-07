class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res: number[][] = [];
        const visited: Set<string> = new Set<string>();

        const dfs = (i: number, curr: number[], sum: number) => {
           
            if (target === sum) {
                let key: string = "";
                for (const num of curr) {
                    key += String(num);
                    key += ","
                }
                if (visited.has(key)) return
                visited.add(key)
                res.push([...curr]);
                return
            }
 
            if (i >= nums.length || target < sum) {
                return
            }
            
            curr.push(nums[i])
            dfs(i, curr, sum + nums[i])
            dfs(i + 1, curr, sum + nums[i])
            curr.pop()
            dfs(i + 1, curr, sum)
        }

        dfs(0,[],0)

        return res
    }
}
