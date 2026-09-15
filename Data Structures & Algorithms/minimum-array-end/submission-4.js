class Solution {
    /**
     * @param {number} n
     * @param {number} x
     * @return {number}
     */
    minEnd(n, x) {
        let res = 0n
        n -= 1;

        const x_bin = new Array(64).fill(0);
        const n_bin = new Array(64).fill(0);

        for (let i = 0; i < 32; i++) {
            x_bin[i] = (x >> i) & 1;
            n_bin[i] = (n >> i) & 1;
        };

        let i_x = 0;
        let i_n = 0;

        while (i_x < 63) {
            while (i_x < 63 && x_bin[i_x] !== 0) {
                i_x++;
            }
            x_bin[i_x] = n_bin[i_n]
            i_x++;
            i_n++;
        }

        for (let i = 0; i < 64; i++) {
            if (x_bin[i] === 1) {
                res += BigInt(1) << BigInt(i);
            }
        }

        return Number(res);
    }
}
