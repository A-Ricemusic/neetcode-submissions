class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        let res: number[][] = [];
        nums.sort((a,b) => a - b)

        const dfs = (i: number, curr: number[]) => {
            if (i === nums.length) {
                res.push([...curr])
                return
            }
            let next: number = i;
            while (next < nums.length && nums[next] === nums[i]) {
                next++;
            }
            dfs(next,curr)
            curr.push(nums[i])
            dfs(i + 1, curr)
            curr.pop()

        }

        dfs(0,[]);
        return res

    }
}
