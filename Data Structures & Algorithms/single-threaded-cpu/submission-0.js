class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        const newTasks = [];
        for (let i = 0; i < tasks.length; i++) {
            newTasks.push([...tasks[i], i]);
        };

        newTasks.sort((a,b) => a[0] !== b[0]? a[0] - b[0] : a[1] - b[1]);
        let t = newTasks[0][0];
        const heap = new PriorityQueue((a,b) => a[1] !== b[1]? a[1] - b[1] : a[2] - b[2]);
        heap.enqueue(newTasks[0]);
        let head = 1;
        const res = [];

        while (newTasks.length - head > 0) {
            while (!heap.isEmpty()) {
                const [x,y,z] = heap.dequeue()
                t += y
                res.push(z)
               while (head < newTasks.length && t >= newTasks[head][0]) {
                heap.enqueue(newTasks[head++])
               } 
            }
            if (newTasks.length - head === 0) break;
            t = newTasks[head][0]
            heap.enqueue(newTasks[head++])

        }

        return res;

    }
}
