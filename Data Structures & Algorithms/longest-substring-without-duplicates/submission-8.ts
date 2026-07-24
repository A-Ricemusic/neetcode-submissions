class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l: number = 0;
        let charSet = new Set<string>();
        let res: number = 0;
        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l])
                l++;
            }

            charSet.add(s[r])
            res = Math.max(res, r - l + 1)
        }
        return res
    }
}
