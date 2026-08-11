class Solution {
    /**
     * @param {number} numPeople
     * @return {number}
     * 1. left, right or + 2
     * 
     */
    numberOfWays(numPeople) {
        const m = 1000000007n;
        const n = Math.floor(numPeople / 2);

        const inv = new Array(n + 2);
        inv[1] = 1n;

        for (let i = 2; i < n + 2; i++) {
            const bi = BigInt(i);
            const k = m / bi;
            const r = m % bi;
            inv[i] = (m - ((k * inv[Number(r)]) % m)) % m
        }

        let C = 1n;
        for (let i = 0; i < n; i++) {
            C = (C * 2n * BigInt(2 * i + 1) * inv[i + 2]) % m;
        }

        return Number(C);
    }
}
