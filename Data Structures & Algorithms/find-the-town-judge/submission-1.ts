class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n: number, trust: number[][]): number {

        const received: number[] = new Array(n).fill(0);
        const sent: number[] = new Array(n).fill(0);

        for (const t of trust) {
            sent[t[0] - 1]++;
            received[t[1] - 1]++;
        }

        for (let i = 0; i < n; i++) {
            if (received[i] === n - 1 && sent[i] === 0) {
                return i + 1
            }
        }
        return -1
    }
}
