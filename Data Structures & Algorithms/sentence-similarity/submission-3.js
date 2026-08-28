class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    areSentencesSimilar(sentence1, sentence2, similarPairs) {

        if (sentence1.length !== sentence2.length) return false;
        const hashSet = new Map()
        for (const [w1,w2] of similarPairs) {
            if (!hashSet.has(w1)) {
                hashSet.set(w1, new Set());
            };

            if (!hashSet.has(w2)) {
                hashSet.set(w2, new Set());
            };

            hashSet.get(w1).add(w2);
            hashSet.get(w2).add(w1);
        }

        for (let i = 0; i < sentence1.length; i++) {
            const w1 = sentence1[i];
            const w2 = sentence2[i];
            
            if (!hashSet.has(w1)) {
                hashSet.set(w1, new Set())
            }

            if (w1 !== w2 && !hashSet.get(w1).has(w2)) {
                return false;
            }
        }

        return true;
    }
}
