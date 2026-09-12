class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     * 
     * bills = [5,5,5,5,10,20,10]
     * {
     * 5: 3
     * 10: 1
     * 20: 0
     * }
     */
    lemonadeChange(bills) {
        const hashMap = new Map();
        hashMap.set(5,0)
        hashMap.set(10,0)
        hashMap.set(20,0)
        for (const bill of bills) {
            if (bill === 5) {
                hashMap.set(5, hashMap.get(5) + 1)
            } else if (bill === 10) {
                if (hashMap.get(5) === 0) return false;
                hashMap.set(10, hashMap.get(10) + 1)
                hashMap.set(5, hashMap.get(5) - 1)
            } else {
                if (hashMap.get(5) >= 1 && hashMap.get(10) >= 1) {
                    hashMap.set(5, hashMap.get(5) - 1)
                    hashMap.set(10, hashMap.get(10) - 1)
                } else if (hashMap.get(5) >= 3) {
                    hashMap.set(5, hashMap.get(5) - 3)
                } else {
                    return false
                }
            }
        }

        return true;
    }
}
