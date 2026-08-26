class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;
        let prev = 1
        let curr = 2
        for (let i = 3; i <= n; i++) {
            const tmp = curr
            curr = curr + prev
            prev = tmp
        }

        return curr;

    }
}
