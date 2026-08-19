class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if (x < 0) return false;
        let rev = 0;
        let num = x
        while (num > 0) {
            const digit = num % 10
            rev = rev * 10 + digit
            num = Math.floor(num / 10)
        }
        return rev === x;
    }
}
