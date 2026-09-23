class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    shortestCommonSupersequence(str1, str2) {
        const n = str1.length;
        const m = str2.length;
        let prev = [];
        for (let j = 0; j < m; j++) {
            prev.push(str2.substring(j))
        }
        prev.push("");
        for (let i = n - 1; i >= 0; i--) {
            let curr = new Array(m + 1).fill("");
            curr[m] = str1.substring(i)
            for (let j = m - 1; j >= 0; j--) {
                if (str1[i] === str2[j]) {
                    const str = str1[i] + prev[j + 1];
                    curr[j] = str;
                } else {
                    const c1 = curr[j + 1]
                    const c2 = prev[j]
                    const str = c1.length < c2.length? str2[j] + c1 : str1[i] + c2;
                    curr[j] = str;

                }
            }
            prev = curr
        }
        return prev[0];
    }
}
