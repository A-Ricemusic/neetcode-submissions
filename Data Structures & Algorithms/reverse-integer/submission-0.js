class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let str = String(x).split('').reverse().join('')
        let num = -1
        if (x < 0) {
            num = -1 * parseInt(str)
        } else {
            num = parseInt(str)
        }

        if (num < -(2 ** 31) || num > 2 ** 31) return 0;
        return num
    }
}
