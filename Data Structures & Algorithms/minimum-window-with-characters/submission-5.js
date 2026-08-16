class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     * 
     */
    minWindow(s, t) {
        const tCount = new Map()
        for (const c of t) {
            tCount.set(c, (tCount.get(c) || 0) + 1)
        }
        const sCount = new Map()
        let l = 0;
        let resLen = Infinity;
        let res = [-1,-1]
        let matches = 0;

        for (let r = 0; r < s.length; r++) {
            if (tCount.has(s[r])) {
                sCount.set(s[r], (sCount.get(s[r]) || 0) + 1);
                if (tCount.get(s[r]) === sCount.get(s[r])) matches++;
            }

            while (matches === tCount.size) {
                if (tCount.has(s[l])) {
                    sCount.set(s[l], (sCount.get(s[l]) || 0) - 1);
                    if (tCount.get(s[l]) > sCount.get(s[l])) matches--;
                }
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l,r];
                }
                l++;
            }
        }

        return resLen === Infinity? "" : s.substring(res[0], res[1] + 1)

    }
}
