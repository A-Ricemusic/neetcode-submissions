class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const getNext = (x) => {
            let newNum = 0
            while (x !== 0) {
                const digit = x % 10;
                x = Math.floor(x / 10)
                newNum += digit ** 2
            }
            return newNum
        }

        let slow = getNext(n);
        let fast = getNext(getNext(n));

        while (slow !== fast && fast !== 1) {
            slow = getNext(slow)
            fast = getNext(getNext(fast))
        }

        return fast === 1? true : false
    }
}
