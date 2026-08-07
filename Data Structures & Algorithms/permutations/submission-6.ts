class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res: number[][] = [];
        const n: number = nums.length;
        const visited: boolean[] = new Array(nums.length).fill(false);
        const curr: number[] = []
        const dfs = () => {
            if (curr.length === nums.length) {
                res.push([...curr])
                return
            }
            for (let j = 0; j < n; j++) {
                if (!visited[j]) {
                    visited[j] = true
                    curr.push(nums[j])
                    dfs()
                    curr.pop()
                    visited[j] = false
                }
            }
        }
  
        for (let i = 0; i < n; i++) {
            visited[i] = true
            curr.push(nums[i])
            dfs()
            curr.pop()
            visited[i] = false
        }


   
        return res;
    }
}
