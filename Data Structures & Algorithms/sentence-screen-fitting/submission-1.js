class Solution {
    /**
     * @param {string[]} sentence
     * @param {number} rows
     * @param {number} cols
     * @return {number}
     */

    //time: o(rows * cols)
    //space: o(1)
    wordsTyping(sentence, rows, cols) {
        const n = sentence.length;
        const dp = new Array(n);

        for (let i = 0; i < n; i++) {
            let col = 0;
            let words = 0;
            let idx = i;
            while (col + sentence[idx % n].length <= cols) {
                col += sentence[idx % n].length + 1;
                words++;
                idx++;
            }
            dp[i] = words;
        }
        //[1,1]
        let totalWords = 0;
        let start = 0;
        for (let i = 0; i < rows; i++) {
            totalWords += dp[start];
            start = (start + dp[start]) % n;
        }

        return Math.floor(totalWords / n)
    }
}
