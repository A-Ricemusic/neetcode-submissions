class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const cache: Record<number,number> = {}

        for (let i = 0; i < nums.length; i++) {
            let comp: number = target - nums[i];
            if (comp in cache) {
                return [cache[comp], i]
            } else {
                cache[nums[i]] = i;
            }
        }
        return []
    }
}
