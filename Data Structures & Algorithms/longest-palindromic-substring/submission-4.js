class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = [0,0];
        let resLen = 0
        const n = s.length
        for (let i = 0; i < n; i++) {

            //odd
            let l = i;
            let r = i;
            while ( l >= 0 && r < n && s[l] === s[r]) {
                if (r - l + 1 > resLen) {
                    res = [l,r]
                    resLen = r - l + 1
                }
                l--;
                r++;
            }

            //even
            l = i;
            r = i + 1;
            while ( l >= 0 && r < n && s[l] === s[r]) {
                if (r - l + 1 > resLen) {
                    res = [l,r]
                    resLen = r - l + 1
                }
                l--;
                r++;
            }

        }
        return s.substring(res[0], res[1] + 1)
    }
}
