class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     *  text1 = "cat", text2 = "crabt" 
     * i = 1, j = 1
     * 
     */
    longestCommonSubsequence(text1, text2) {
        const memo = new Map()
        const n = text1.length;
        const m = text2.length;

        const dfs = (i,j) => {
            if (i >= n || j >= m) return 0;
            const state = `${i},${j}`;
            if (memo.has(state)) return memo.get(state);
            let res = 0;
            if (text1[i] === text2[j]) {
                res = dfs(i + 1, j + 1) + 1
            } else {
                const c1 = dfs(i + 1, j);
                const c2 = dfs(i, j + 1);
                res = Math.max(c1,c2)
            }

            memo.set(state, res);
            return res;
        }


        return dfs(0,0)
    }
}
