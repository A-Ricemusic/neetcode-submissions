class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        let heap = new MinPriorityQueue();

        for (let num of nums) {
            heap.enqueue(num)
            if (heap.size() > k) {
                heap.dequeue()
            }
        }
        return heap.front()
    }
}
