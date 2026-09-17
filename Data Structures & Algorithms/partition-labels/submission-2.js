class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     * 
     * s = "xyxxyzbzbbisl"
     * 
     * {
     * x: 3
     * y: 2
     * b: 3
     * z: 2
     * i: 1
     * s: 1
     * l: 1
     * }
     * 
     * 
     * res = [5,5,1]
     * last will be -1
     * last = 9
     * i = 10
     * matches = 1
     * curr = {
     * i: 1
     * }
     * s = "xyxxyzbzbbisl"
     * 
     * n = length of S
     * k = amount of substrings;
     * time: O(n)
     * space: O(26) => O(1) (not couunting res)
     * space: O(n) in the worst case O(k) in general(Counting res)
     */
    partitionLabels(S) {
        const res = [];
        const hashMap = new Map();
        for (const char of S) {
            hashMap.set(char, (hashMap.get(char) ?? 0) + 1)
        }

        let last = -1
        let matches = 0;
        let curr = new Map();
        for (let i = 0; i < S.length; i++) {
            curr.set(S[i], (curr.get(S[i]) ?? 0) + 1);
            if (curr.get(S[i]) === hashMap.get(S[i])){
                matches++;
            } 
            if (matches === curr.size) {
                res.push(i - last)
                last = i
                curr = new Map();
                matches = 0;
            }
        }
        return res;
    }
}
