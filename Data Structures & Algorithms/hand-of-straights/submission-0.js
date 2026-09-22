class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     * n = amount of cards
     * k = amount of groups
     * m = amount of distinct numbers in arr
     * l = group size
     * 
     * time: O(n + (k *l * m))
     * space: O(n)
     */
    isNStraightHand(hand, groupSize) {
        const n = hand.length;
        if (n % groupSize !== 0) return false;
        const amt = n / groupSize  
        const hashMap = new Map();
        //O(n)
        for (const card of hand) {
            hashMap.set(card, (hashMap.get(card) ?? 0) + 1)
        }
        //O(k * l * m)
        for (let i = 0; i < amt; i++) {
            let curr = Math.min(...hashMap.keys());
            for (let j = 0; j < groupSize; j++) {
                if (hashMap.has(curr)) {
                    hashMap.set(curr, hashMap.get(curr) - 1);
                    if (hashMap.get(curr) === 0) {
                        hashMap.delete(curr)
                    }
                } else {
                    return false;
                }
                curr = curr + 1
            } 
        }
        return true;
    }
}
