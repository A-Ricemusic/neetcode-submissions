
class Solution {
    /**
     * @param {string} s
     * @param {string[]} words
     * @return {string}
     */
    addBoldTag(s, words) {
        const n = s.length;
        const bold = new Array(n).fill(false);
        for (const word of words) {
            let start = s.indexOf(word);
            while (start !== -1) {
                for (let i = start; i < start + word.length; i++) {
                    bold[i] = true;
                }
                start = s.indexOf(word, start + 1);
            }
        }
        const openTag = "<b>";
        const closedTag = "</b>";
        const ans = [];

        for (let i = 0; i < n; i++) {
            if (bold[i] && (i === 0 || !bold[i - 1])) {
                ans.push(openTag);
            }
            ans.push(s[i]);
            if (bold[i] && (i === n - 1 || !bold[i + 1])) {
                ans.push(closedTag);
            }
        }

        return ans.join("");
    }
}
