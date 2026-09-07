class Solution {
    /**
     * @param {number[][]} wall
     * @return {number}
     * {
     * 1: 3
     * 2: 1
     * 3: 3
     * 4: 5
     * 5: 2
     * }
     */
    leastBricks(wall) {
        const hashMap = new Map();
        const len = wall[0].reduce((a,c) => a + c, 0);

        for (const row of wall) {
            let gap = 0;
            for (let i = 0; i < row.length - 1; i++) {
                gap += row[i];
                hashMap.set(gap, (hashMap.get(gap) || 0) + 1);
            }
        }
        let maxGap = 0
        for (const [_,val] of hashMap.entries()) {
            maxGap = Math.max(val, maxGap)
        }

        return  wall.length - maxGap
    }
}
