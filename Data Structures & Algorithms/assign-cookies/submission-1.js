class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
        const maxHeap = new PriorityQueue((a,b) => b - a);
        for (const num of s) {
            maxHeap.enqueue(num);
        }

        g.sort((a,b) => b - a);
        let res = 0;
        for (const num of g) {
            if (!maxHeap.isEmpty() && maxHeap.front() >= num) {
                res++;
                maxHeap.dequeue()
            }
        }

        return res;
    }
}
