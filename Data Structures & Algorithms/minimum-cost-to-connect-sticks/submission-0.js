class Solution {
    /**
     * @param {number[]} sticks
     * @return {number}
     * example 1:
     * 
     * sticks = [1,8,3,5]
     * res = 4
     *  [,5,8]
     * 
     * 
     * example 2:
     * 
     * sticks = [1,8,3,5]
     * res = 0
     * [6,5,4,3]
     */
    connectSticks(sticks) {
        let res = 0;
        const heap = new PriorityQueue((a,b) => a - b);
        for (const stick of sticks) {
            heap.enqueue(stick);
        }
        while (heap.size() > 1) {
            const s1 = heap.dequeue();
            const s2 = heap.dequeue();
            const newStick = s1 + s2;
            res += newStick;
            heap.enqueue(newStick);
        };

        return res;
    }
}
