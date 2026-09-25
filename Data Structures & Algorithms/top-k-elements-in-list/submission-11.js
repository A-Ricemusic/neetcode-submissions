class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const heap = new PriorityQueue((a,b) => a[0] - b[0])
        const map = new Map();
        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        for (const [num,freq] of map.entries()) {
            heap.enqueue([freq,num]);
            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        const res = [];
        while (!heap.isEmpty()) {
            const [freq, num] = heap.dequeue()
            res.push(num)
        }

        return res;
    }
}
