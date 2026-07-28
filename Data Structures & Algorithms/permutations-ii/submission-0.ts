class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * 
     * [1,1,2,4,6]
     */
    permuteUnique(nums: number[]): number[][] {
        nums.sort((a,b) => a - b)
        let mySet = new Set<string>();
        let res: number[][] = [];
        let cache: boolean[] = new Array(nums.length).fill(false)

        const dfs = (curr: number[]) => {
            if (curr.length === nums.length) {
                let key: string = curr.join('')
                if (!mySet.has(key)) {
                    res.push([...curr])
                    mySet.add(key)
                }
                return
            }

            for (let j = 0; j < nums.length; j++) {
                if (!cache[j]) {
                    cache[j] = true;
                    curr.push(nums[j]);
                    dfs(curr)
                    cache[j] = false;
                    curr.pop()
                }
            }

        }

        dfs([])
        return res
    }
}
