class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if (x < 0) return false
        let rev = 0
        let num = x
        while (num > 0) {
            rev = 10 * rev + (num % 10)
            num = Math.floor(num / 10)
        }

        return x === rev
    }
}
