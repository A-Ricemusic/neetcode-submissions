class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     * 
     * arr = [2,4,5,8], k = 2, x = 6
     * 
     * [4,2], [2, 4], [1, 5]
     * 
     */
        findClosestElements(arr: number[], k: number, x: number): number[] {
    const heap = new MaxPriorityQueue();
    const OFFSET = 10000;   // num ranges [-10000, 10000]
    const BASE = 100001;    // must exceed (max shifted num) = 20000

    for (const num of arr) {
        const distance = Math.abs(num - x);
        heap.enqueue(distance * BASE + (num + OFFSET));
        if (heap.size() > k) heap.dequeue();
    }

    const res: number[] = [];
    while (heap.size() > 0) {
        const p = heap.dequeue();
        res.push((p % BASE) - OFFSET);
    }
    return res.sort((a, b) => a - b);
}
}
