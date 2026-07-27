class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let hashMap: Record<string, number[]> = {};

        const dfs = (idx: number, curr: number[]): void => {
            if (idx === nums.length + 1) {
                return
            }
            let key: string = ""
            for (let num of curr) {
                key += String(num);
                key += ",";
            }
            if (!(key in hashMap)) {
                hashMap[key] = curr;
            }
            let currentCurr: number[] = [...curr];
            let newCurr: number[] = [...curr, nums[idx]]
            
            dfs(idx + 1, currentCurr)
            dfs(idx + 1, newCurr)
            return

        }

        dfs(0,[])

        let res: number[][] = []

        for (let arr of Object.values(hashMap)) {
            res.push(arr)
        }

        return res
    }
}
