class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        const memo = new Map()

        const dfs = (i1, i2) => {
            if (i1 >= text1.length || i2 >= text2.length) return 0;
            const key = `${i1}, ${i2}`
            if (memo.has(key)) return memo.get(key);
            let res = -1
            if (text1[i1] === text2[i2]) {
                res = dfs(i1 + 1, i2 + 1) + 1
                memo.set(key,res)
                return res
            }
            res = Math.max(dfs(i1, i2 + 1), dfs(i1 + 1, i2))
            memo.set(key,res)
            return res

        }


        return dfs(0, 0)
    }
}
