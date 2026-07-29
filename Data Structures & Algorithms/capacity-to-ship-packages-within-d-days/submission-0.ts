class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights: number[], days: number): number {
        let l = Math.max(...weights)
        let r : number = weights.reduce((acc, x) => x + acc, 0)
        let res: number = r

        while (l <= r) {
            const mid: number = Math.floor(l + (r - l) / 2);
            let dayCount: number = 1;
            let weightCount: number = 0;

            for (const w of weights) {
                weightCount += w;
                if (weightCount > mid) {
                    weightCount = w;
                    dayCount++;
                }

                if (dayCount > days) {
                    break
                }
            }
            if (dayCount > days) {
                l = mid + 1
            } else {
                res = mid
                r = mid - 1
            }
        }


        return res
    }
}
