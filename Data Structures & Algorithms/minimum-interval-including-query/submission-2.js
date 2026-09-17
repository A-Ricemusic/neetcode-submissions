class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        const hashMap = new Map();
        const n = queries.length;
        const m = intervals.length;

        for (let i = 0; i < n; i++) {
            if (!hashMap.has(queries[i])) {
                 hashMap.set(queries[i], []);
            }
            hashMap.get(queries[i]).push(i)
        };

        intervals.sort((a,b) => a[0] - b[0]);
        queries.sort((a,b) => a - b);

        const res = new Array(n).fill(0);
        const heap = new PriorityQueue((a,b) => a[0] === b[0]? a[1] - b[1] : a[0] - b[0]);
        let j = 0;

        for (let i = 0; i < n; i++) {
            while (j < m && intervals[j][0] <= queries[i]) {
                const dist = intervals[j][1] - intervals[j][0] + 1
                heap.enqueue([dist,intervals[j][1]]);
                j++;
            };
            while (!heap.isEmpty() && heap.front()[1] < queries[i]) {
                heap.dequeue();
            }
            const val = heap.isEmpty()? -1 : heap.front()[0]
            const idxArray = hashMap.get(queries[i])
            res[idxArray[0]] = val
            idxArray.shift()
            hashMap.set(queries[i], idxArray)
        }
        return res;
    }
}
