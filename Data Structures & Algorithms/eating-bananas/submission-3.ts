class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l: number = 1;
        let r: number = Math.max(...piles)
        let res: number = r

        while (l <= r) {
            const mid: number = Math.floor(l + (r - l) / 2)
            let count: number = 0
            for (let p of piles) {
                let curr: number = p;
                count += Math.ceil(p / mid)
            }

            if (count > h) {
                   l = mid + 1 
            } else {
                res = mid
                r = mid - 1
            }
        }
        return res;
    }
}
