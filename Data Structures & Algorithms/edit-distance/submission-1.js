class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const memo = new Map()

        const dfs = (i,j) => {
            if (i === word1.length) {
                return word2.length - j;
            };

            if (j === word2.length) {
                return word1.length - i;
            };
            const key = `${i},${j}`
            if (memo.has(key)) return memo.get(key)

            let res = 0
            if (word1[i] !== word2[j]) {
                const choice1 = dfs(i + 1, j)
                const choice2 = dfs(i,j + 1)
                const choice3 = dfs(i + 1, j + 1)
                res = Math.min(choice1, choice2, choice3) + 1
            } else {
                res = dfs(i + 1,j + 1)
            }
            memo.set(key,res)
            return res;
             

        }



        return dfs(0,0)
    }
}
