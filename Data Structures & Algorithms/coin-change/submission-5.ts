class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const q: number[] = [0];
        let head: number = 0;
        const visited: boolean[] = new Array(amount + 1).fill(false);
        let count: number = 0;
        while (q.length - head > 0) {
            const size: number = q.length - head;
            for (let i = 0; i < size; i++) {
                const currAmount = q[head++];
                if (visited[currAmount]) continue;
                if (currAmount === amount) return count;
                visited[currAmount] = true;
                if (currAmount > amount) continue;
                for (const c of coins) {
                    q.push(currAmount + c);
                }
            }
            count++;
        }
        return -1;
    }
}
