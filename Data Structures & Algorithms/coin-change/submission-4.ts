class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        if (amount === 0) return 0;
        const q: number[] = [0];
        let head: number = 0;
        const visited: boolean[] = new Array(amount + 1).fill(false);
        visited[0] = true
        let count: number = 0
        // 2
        // 2,6,11
        while (q.length - head > 0) {
            const size: number = q.length - head;
            for (let i = 0; i < size; i++) {
                const currAmount = q[head++];
                for (const c of coins) {
                    const newAmt: number = c + currAmount;
                    if (newAmt > amount) continue;
                    if (visited[newAmt]) continue;
                    if (newAmt === amount) return count + 1
                    visited[newAmt] = true;
                    q.push(newAmt)
                }
            }
            count++;


        }

        return -1
    }
}
