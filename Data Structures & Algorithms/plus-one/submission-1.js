class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let carry = 1;
        const n = digits.length;
        for (let i = n - 1; i >= 0; i--) {
            if (i === 0) {
                digits[i] += carry
                carry = 0
                if (digits[i] === 10) {
                    digits[i] = 0;
                    digits.unshift(1)
                }
            } else if (i === n - 1) {
                digits[i]++;
                if (digits[i] === 10) {
                    digits[i] = 0;
                    carry = 1
                } else {
                    carry = 0
                }
            } else {
                digits[i] += carry
                carry = 0
                if (digits[i] === 10) {
                    digits[i] = 0;
                    carry = 1
                }
            }
        }
        return digits

    }
}
