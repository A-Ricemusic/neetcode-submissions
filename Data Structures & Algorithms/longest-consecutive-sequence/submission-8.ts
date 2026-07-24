class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0
        }
        const mySet = new Set<number>();
        const visited = new Set<number>();
        let res: number = 1
        for (let num of nums) {
            mySet.add(num)
        }
        for (let i = 0; i < nums.length; i++) {
            let count: number = 1
            let curr: number = nums[i]
            if (visited.has(curr)) {
                continue
            }
            while (mySet.has(curr + 1)) {
                count += 1;
                visited.add(curr);
                curr = curr + 1;
                res = Math.max(count, res)
                
            }
        }
        return res
    }
}
