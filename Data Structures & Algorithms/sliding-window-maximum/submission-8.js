class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const heap = new PriorityQueue((a,b) => b[0] - a[0]);
        const res = []
        const n = nums.length;
        /* 
            nums = [1,2,1,0,4,2,6], k = 3
            heap = [[1, 2],[0,3],[4,4]]
            res = [2,2]
            i = 4
        */

        for (let i = 0; i < n; i++) {
            heap.enqueue([nums[i], i]);

            if (i >= k - 1) {
                while (heap.front()[1] <= i - k) {
                    heap.dequeue()
                }
                res.push(heap.front()[0])
            }
        }

        return res;
    }
}
