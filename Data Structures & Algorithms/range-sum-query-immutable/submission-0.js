class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefixSum = [0]
        for (const num of nums) {
            this.prefixSum.push(this.prefixSum[this.prefixSum.length - 1] + num)
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.prefixSum[right + 1] - this.prefixSum[left]
    }
}
