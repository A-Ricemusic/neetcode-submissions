class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    shortestCommonSupersequence(str1, str2) {
        const memo = new Map()
        const n = str1.length;
        const m = str2.length;

        const dfs = (i,j) => {
            if (i >= n) {
                return str2.substring(j)
            }
            if (j >= m) {
                return str1.substring(i)
            }
            const state = `${i},${j}`;
            if (memo.has(state)) return memo.get(state);
            let res = "";
            if (str1[i] === str2[j]) {
                res = str1[i] + dfs(i + 1,j + 1) 
            } else {
                const c1 = str1[i] + dfs(i + 1,j);
                const c2 = str2[j] + dfs(i,j + 1);
                res = c1.length < c2.length? c1 : c2;
            }
            memo.set(state,res)
            return res;
        }

        return dfs(0,0)
    }
}
