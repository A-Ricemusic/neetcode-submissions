class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const min = (2 ** 31) * -1
        const max = (2**31) - 1

        let res = 0;
        while (x !== 0) {
            const digit = x % 10
            x = Math.trunc(x / 10)
            
            if (res > max / 10 || (res === max / 10 && digit > max % 10)) return 0;
            if (res < min / 10 || (res === min / 10 && digit < min % 10)) return 0;

            res = res * 10 + digit
        }

        return res
    }
}
