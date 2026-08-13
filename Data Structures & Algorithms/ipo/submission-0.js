class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     * 
     * 
     * original = [[2,1],[3,5],[3,3],[4,2],[4,3]]  heap: (a,b) => a[0] - b[0]
     * []  /min heap
     * [] /max heap
     * w = 8
     * count = 2
     * k = 4
     * 
     */
    findMaximizedCapital(k, w, profits, capital) {
        const minHeap = new PriorityQueue((a,b) => a[0] - b[0]);
        const maxHeap = new PriorityQueue((a,b) => b - a);
        let count = 0;

        for (let i = 0; i < profits.length; i++) {
            minHeap.enqueue([capital[i],profits[i]])
        }
        while (count < k) {
            while (!minHeap.isEmpty() && w >= minHeap.front()[0]) {
                maxHeap.enqueue(minHeap.dequeue()[1])
            }
            if (maxHeap.isEmpty()) {
                return w;
            }
            w += maxHeap.dequeue()
            count++;
        }

        return w
    }
}
