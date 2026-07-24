class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const mySet = new Set<number>(nums)
        let res: number = 0
        for (let num of mySet) {
            if (mySet.has(num - 1)) {
                continue
            }
            let count: number = 1
            let curr: number = num
            while (mySet.has(curr + 1)) {
                count += 1
                curr += 1
            }
            res = Math.max(count,res)
        }

        return res
    }
}
