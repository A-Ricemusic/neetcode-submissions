class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    rearrangeString(s, k) {
        const hashMap = new Map()
        for (const c of s) {
            hashMap.set(c, (hashMap.get(c) || 0) + 1);
        };
        const heap = new PriorityQueue((a,b) => b[0] - a[0]);

        for (const key of hashMap.keys()) {
            heap.enqueue([hashMap.get(key), key]);
        }

        let res = [];
        const q = []
        let head = 0

        while (res.length !== s.length) {
            while (q.length - head > 0 && res.length - q[head][1] >= k) {
                const [char, idx, freq] = q[head++];
                heap.enqueue([freq, char])
            }
            if (heap.isEmpty()) return "";
            const [f, c] = heap.dequeue()
            res.push(c)
            if (f > 1) {
                q.push([c,res.length - 1, f - 1])
            } 
        }

        return heap.isEmpty()? res.join("") : ""



    }
}
