class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0
        const n = s.length
        for (let i = 0; i < n; i++) {

            //odd
            let l = i;
            let r = i;
            while ( l >= 0 && r < n && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }

            //even
            l = i;
            r = i + 1;
            while ( l >= 0 && r < n && s[l] === s[r]) {
                res++
                l--;
                r++;
            }

        }
        return res;
    }
}
