class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        let freqTable: Record<string,number> = {}

        for (let t of tasks) {
            freqTable[t] = (freqTable[t] || 0) + 1;
        }

        const heap = new MaxPriorityQueue();
        for (let k of Object.keys(freqTable)) {
            heap.enqueue(freqTable[k])
        }

        const q = new Queue();
        let time: number = 0;

        while (heap.size() > 0 || q.size() > 0) {
            if (heap.size() > 0) {
                const c: number = heap.dequeue() - 1;
                if (c > 0) {
                    q.enqueue([c, time + n]);
                }
            }
            
            time++;
    
            if (q.size() > 0 && q.front()[1] < time) {
                const cnt: number = q.dequeue()[0]
                heap.enqueue(cnt)
            }

        }

        return time
    }
}
