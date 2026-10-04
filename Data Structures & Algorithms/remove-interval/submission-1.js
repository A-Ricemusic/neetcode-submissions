class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} toBeRemoved
     * @return {number[][]}
     */
    removeInterval(intervals, toBeRemoved) {
        intervals.sort((a,b) => a[0] - b[0]);
        const res = [];
        for (let i = 0; i < intervals.length; i++) {
            const [s,e] = intervals[i];
            if (e <= toBeRemoved[0] || s >= toBeRemoved[1]) {
                res.push([s,e]);
            } else {
                if (s < toBeRemoved[0]) {
                    res.push([s,toBeRemoved[0]])
                } 
                if (e > toBeRemoved[1]) {
                    res.push([toBeRemoved[1], e])
                } 
            } 
        }

        return res;
    }
}
