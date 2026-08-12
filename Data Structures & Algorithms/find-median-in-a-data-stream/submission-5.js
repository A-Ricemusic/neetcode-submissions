class MedianFinder {
    constructor() {
        //larger
        this.minHeap = new PriorityQueue((a,b) => a - b);
        //smaller
        this.maxHeap = new PriorityQueue((a,b) => b - a);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     * [5,2,5,6]
     * max heap
     * [3,3]
     * min heap
     * [5,5]
     */
    addNum(num) {
        num = parseInt(num)

        if (this.minHeap.size() === this.maxHeap.size()) {
            if (this.minHeap.size() === 0 && this.maxHeap.size() === 0) {
                this.maxHeap.enqueue(num);
                return
            }
            if (num >= this.minHeap.front()) {
                this.minHeap.enqueue(num);
            } else if (num <= this.maxHeap.front()) {
                this.maxHeap.enqueue(num);
            } else {
                this.minHeap.enqueue(num);
            } 
        } else if (this.maxHeap.size() > this.minHeap.size()) {
            if (num > this.maxHeap.front()) {
                this.minHeap.enqueue(num);
            } else {
                const num2 = this.maxHeap.dequeue()
                this.maxHeap.enqueue(num)
                this.minHeap.enqueue(num2)
            }   
        } else {
            if (num < this.minHeap.front()) {
                this.maxHeap.enqueue(num);
            } else {
                const num2 = this.minHeap.dequeue()
                this.minHeap.enqueue(num)
                this.maxHeap.enqueue(num2)
            } 

        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.minHeap.size() === this.maxHeap.size()) {
            return (this.minHeap.front() + this.maxHeap.front()) / 2
        } else if (this.minHeap.size() < this.maxHeap.size()){
            return this.maxHeap.front() / 1
        } else {
            return this.minHeap.front() / 1
        }
    }
}
