class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const memo = new Map();

        const dfs = (i,j) => {
            if (i >= word1.length) {
                return word2.length - j;
            }
            if (j >= word2.length) {
                return word1.length - i;
            }

            const state = `${i},${j}`;
            if (memo.has(state)) return memo.get(state);

            if (word1[i] === word2[j]) {
                return dfs(i + 1,j + 1)
            }
            const res = Math.min(dfs(i + 1, j), dfs(i,j + 1), dfs(i + 1,j + 1)) + 1

            memo.set(state, res)
            return res;
        }



        return dfs(0,0);
    }
}
