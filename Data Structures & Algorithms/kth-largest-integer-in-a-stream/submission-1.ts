class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    private heap: any;
    private k: number;
    constructor(k: number, nums: number[]) 
    {
        this.heap = new MinPriorityQueue();
        this.k = k
        for (let num of nums) {
            this.heap.enqueue(num)
            if (this.heap.size() > this.k) {
                this.heap.dequeue()
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.heap.enqueue(val)

        if (this.heap.size() > this.k) {
            this.heap.dequeue()
        }

        return this.heap.front()

        
    }
}
