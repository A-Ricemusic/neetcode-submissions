class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let res: string = "";

        for (let i = 0; i < word1.length; i++) {
            res += word1[i]
            if (i < word2.length) {
                res += word2[i]
            }
        }
        
        for (let i = word1.length; i < word2.length; i++) {
            res += word2[i]
        }


        return res

    }
}
