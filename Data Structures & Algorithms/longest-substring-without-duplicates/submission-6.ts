class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let mySet = new Set<string>();
        let l: number = 0
        let res: number = 0

        for (let r = 0; r < s.length; r++) {
            while (mySet.has(s[r])) {
                mySet.delete(s[l]);
                l++;
            }

            mySet.add(s[r]);
            res = Math.max(res, r - l + 1);
        }
        return res
    }
}
