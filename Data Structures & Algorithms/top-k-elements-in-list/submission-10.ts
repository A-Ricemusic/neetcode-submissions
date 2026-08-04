class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqTable: Record<number, number> = {};

        for (const num of nums) {
            freqTable[num] = (freqTable[num] || 0) + 1
        }

        const arr: [string,number][] = Object.entries(freqTable).sort((a,b) => b[1] - a[1])

        const res: number[] = []

        for (let i = 0; i < k; i++) {
            res.push(parseInt(arr[i][0]))
        }

        return res
    }
}
