class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        let res: number[][] = [];
        let n: number = nums.length;
        let cache: boolean[] = new Array(n).fill(false)

        const dfs = (curr: number[], total: number, cache: boolean[]) => {
            if (total === n) {
                res.push([...curr])
                return
            }
            for (let i = 0; i < n; i++) {
                if (!cache[i]) {
                    cache[i] = true
                    curr.push(nums[i])
                    dfs(curr, total + 1, [...cache])
                    cache[i] = false
                    curr.pop()
                }
            }
        };

        let arr: number[] = []
        for (let i = 0; i < n; i++) {
            cache[i] = true
            arr.push(nums[i])
            dfs(arr, 1, [...cache])
            cache[i] = false
            arr.pop()
        }
        return res;

    }
}
