class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let res: string = "";
        let resLen: number = 0;
        const n: number = s.length;

        for (let i = 0; i < n; i++) {
            let l: number = i;
            let r: number = i;
            while (l >= 0 && r < n && s[l] === s[r]) {
                if (resLen < r - l + 1) {
                    resLen = r - l + 1;
                    res = s.substring(l, r + 1);
                }
                l--;
                r++;
            }

            l = i - 1;
            r = i;
            while (l >= 0 && r < n && s[l] === s[r]) {
                if (resLen < r - l + 1) {
                    resLen = r - l + 1;
                    res = s.substring(l, r + 1);
                }
                l--;
                r++;
            }
        }

        return res;
    }
}
