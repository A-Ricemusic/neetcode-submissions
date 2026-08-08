class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let prev: number = 1;
        let curr: number = 1;

        for (let i = 2; i <= n; i++) {
            const temp: number = curr;
            curr = prev + curr;
            prev = temp;
        }

        return curr
    }
}
