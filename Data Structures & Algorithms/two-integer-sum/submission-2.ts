class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const prevMap = new Map<number,number>();

        for (let i = 0; i < nums.length; i++) {
            const comp = target - nums[i]
            if (prevMap.has(comp)) {
                return [prevMap.get(comp), i]
            }
            prevMap.set(nums[i], i)
        }
        return []
    }
}
