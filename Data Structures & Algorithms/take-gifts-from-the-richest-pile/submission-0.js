class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
    pickGifts(gifts, k) {
        const heap = new PriorityQueue((a,b) => b - a);
        
        for (const gift of gifts) {
            heap.enqueue(gift);
        }
        for (let i = 0; i < k; i++) {
            let gift = heap.dequeue()
            gift = Math.floor(Math.sqrt(gift))
            heap.enqueue(gift)
        }

        let res = 0
        while (!heap.isEmpty()) {
            res += heap.dequeue()
        }

        return res;

    }
}
