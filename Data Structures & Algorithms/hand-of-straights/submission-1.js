class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}

     */
    isNStraightHand(hand, groupSize) {
        const n = hand.length;

        if (n % groupSize !== 0) return false;

        const hashMap = new Map();

        for (const card of hand) {
            hashMap.set(card, (hashMap.get(card) ?? 0) + 1);
        }

        const heap = new PriorityQueue((a, b) => a - b);

        for (const k of hashMap.keys()) {
            heap.enqueue(k);
        }

        while (!heap.isEmpty()) {
            const first = heap.front();

            for (let i = first; i < first + groupSize; i++) {
                if (!hashMap.has(i)) return false;

                hashMap.set(i, hashMap.get(i) - 1);

                if (hashMap.get(i) === 0) {
                    if (i !== heap.front()) return false;

                    heap.dequeue(); // <-- change this
                    hashMap.delete(i);
                }
            }
        }

        return true;
       
    }
}
