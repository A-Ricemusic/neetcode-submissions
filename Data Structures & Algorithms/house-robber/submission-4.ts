class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n: number = nums.length;
        if (nums.length < 2) return Math.max(...nums);
        let rob1: number = nums[0];
        let rob2: number = Math.max(nums[0], nums[1]);
        for (let i = 2; i < n; i++) {
            const next: number =  Math.max(rob2, nums[i] + rob1);
            rob1 = rob2;
            rob2 = next;
        }

        return rob2
    }
}
