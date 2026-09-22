class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const set1 = new Set();
        const set2 = new Set();
        const set3 = new Set();
        for (const [x,y,z] of triplets) {
            if (x <= target[0] && y <= target[1] && z <= target[2]) {
                set1.add(x);
                set2.add(y);
                set3.add(z);
            }
        }

        if (!set1.has(target[0]) 
        || !set2.has(target[1]) 
        || !set3.has(target[2])) return false;

        return true;
    }
}
