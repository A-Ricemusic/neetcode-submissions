class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * [1,1,2,3,4]
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res: number[][] = [];
        const n: number = nums.length
        nums.sort((a,b) => a - b);

        const dfs = (i: number, curr: number[]) => {
            if (i === n) {
                res.push([...curr]);
                return;
            }
            curr.push(nums[i])
            
            dfs(i + 1, curr);
            while (i + 1 < n && nums[i] === nums[i + 1]) {
                i++
            }
            curr.pop()
            dfs(i + 1,curr)
        }

        dfs(0,[])

        return res;
    }
}
