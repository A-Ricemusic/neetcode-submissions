class Solution {
    /**
     * @param {number[]} weights
     * @param {number} k
     * @return {number}
     */
    putMarbles(weights, k) {
        if (k === 1) return 0;
        const minHeap = new PriorityQueue((a,b) => a - b);
        const maxHeap = new PriorityQueue((a,b) => b - a);

        for (let i = 0; i < weights.length - 1; i++) {
            const sum = weights[i] + weights[i + 1];
            minHeap.enqueue(sum);
            if (minHeap.size() > k - 1) {
                minHeap.dequeue()
            }
            maxHeap.enqueue(sum)
            if (maxHeap.size() > k - 1) {
                maxHeap.dequeue()
            }
        }
        let minScore = 0;
        let maxScore = 0;
        while (!minHeap.isEmpty()) {
            maxScore += minHeap.dequeue();
        };

        while (!maxHeap.isEmpty()) {
            minScore += maxHeap.dequeue();
        };

        return maxScore - minScore;

    }
}
