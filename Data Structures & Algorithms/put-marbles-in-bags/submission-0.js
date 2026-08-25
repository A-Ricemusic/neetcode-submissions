class Solution {
    /**
     * @param {number[]} weights
     * @param {number} k
     * @return {number}
     */
    putMarbles(weights, k) {
        if (k === 1) return 0;
        const splits = [];
        for (let i = 0; i < weights.length - 1; i++) {
            splits.push(weights[i] + weights[i + 1]);
        }

        splits.sort((a,b) => a - b);
        let minScore = 0;
        let maxScore = 0;
        const i = k - 1
        for (let j = 0; j < i; j++) minScore += splits[j];
        for (let j = splits.length - i; j < splits.length; j++) {
            maxScore += splits[j];
        }

        return maxScore - minScore;
    }
}
