class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        let count: number[] = new Array(26).fill(0);

        for (let t of tasks) {
            count[t.charCodeAt(0) - "A".charCodeAt(0)]++;
        }
        let heap = new MaxPriorityQueue();

        for (let c of count) {
            if (c !== 0) {
                heap.enqueue(c);
            }
        }

        let time: number = 0;
        let queue = new Queue();

        while (heap.size() > 0 || queue.size() > 0) {
            time++;
            if (heap.size() > 0) {
                let cnt: number = heap.dequeue() - 1;
                if (cnt !== 0) {
                    queue.push([cnt, time + n]);
                }
            }

            if (queue.size() > 0 && queue.front()[1] === time) {
                let node: [number, number] = queue.dequeue();
                heap.enqueue(node[0]);
            }
        }

        return time;
    }
}
