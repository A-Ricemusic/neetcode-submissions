class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const memo = new Map()
        if (s1.length + s2.length !== s3.length) return false;

        const dfs = (i,j) => {
            if (i === s1.length && j === s2.length) {
                return true
            }
            const key = `${i},${j}`
            if (memo.has(key)) return memo.get(key)

            if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) return true;
            if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) return true;
            memo.set(key, false)
            return false
            

        }


        return dfs(0,0)
    }
}
