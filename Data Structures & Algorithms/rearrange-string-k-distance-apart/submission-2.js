class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    rearrangeString(s, k) {
        const frequencyMap = new Map();
        for (const char of s) {
            frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
        }

        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

        for (const char of frequencyMap.keys()) {
            const freq = frequencyMap.get(char);
            maxHeap.enqueue([freq, char]);
        }

        const result = [];
        const waitingQueue = [];
        let queueHead = 0;

        while (result.length !== s.length) {
            while (waitingQueue.length - queueHead > 0) {
                const [char, indexUsed, remainingFreq] = waitingQueue[queueHead];
                const distanceSinceUsed = result.length - indexUsed;

                if (distanceSinceUsed >= k) {
                    queueHead++;
                    maxHeap.enqueue([remainingFreq, char]);
                } else {
                    break;
                }
            }

            if (maxHeap.isEmpty()) {
                return "";
            }

            const [freq, char] = maxHeap.dequeue();
            result.push(char);

            const remainingFreq = freq - 1;
            if (remainingFreq > 0) {
                waitingQueue.push([char, result.length - 1, remainingFreq]);
            }
        }

        return result.join("");
    }
}
