class Solution {
    /**
     * @param {string[]} sentence
     * @param {number} rows
     * @param {number} cols
     * @return {number}
     */
    wordsTyping(sentence, rows, cols) {
        let res = 0;
        let space = rows * cols;
        let currSpace = cols;
        let i = 0;

        while (space > 0) {
            if (sentence[i].length > currSpace) {
                space -= currSpace;
                currSpace = cols;
            }
            currSpace -= sentence[i].length;
            space -= sentence[i].length;
            if (space < 0 || currSpace < 0) break;
            i++;
            if (i === sentence.length) {
                res += 1;
                i = 0;
            };
            if (currSpace === 0) {
                currSpace = cols 
            } else {
                currSpace -= 1
                space -= 1
            }
        }

        return res;
    }
}
