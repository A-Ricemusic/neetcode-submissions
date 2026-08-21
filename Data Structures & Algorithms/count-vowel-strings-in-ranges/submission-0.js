class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     * 
     * [0,1,1,2,3,4]
     */
    vowelStrings(words, queries) {
        const prefixSum = [0]
        const vowels = new Set(['a','e','i','o','u'])
        for (const word of words) {
            if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
                prefixSum.push(prefixSum[prefixSum.length - 1] + 1)
            } else {
                prefixSum.push(prefixSum[prefixSum.length - 1])
            }
        }

        const res = []

        for (const [l,r] of queries) {
            res.push(prefixSum[r + 1] - prefixSum[l])
        }

        return res;

    }
}
