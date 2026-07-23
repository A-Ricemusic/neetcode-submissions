class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const sCount: Record<string,number> = {};
        const tCount: Record<string, number> = {};

        for (let i = 0; i < s.length; i++) {
            sCount[s[i]] = (sCount[s[i]] || 0) + 1;
            tCount[t[i]] = (tCount[t[i]] || 0) + 1;
        }

        for (const key in sCount) {
            if (sCount[key] !== tCount[key]) {
                return false;
            }
        }
        return true
    }
}
