class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlpha(c) {
        return ((c.charCodeAt(0) >= "a".charCodeAt(0) &&  c.charCodeAt(0) <= "z".charCodeAt(0)) ||
                (c.charCodeAt(0) >= "A".charCodeAt(0) &&  c.charCodeAt(0) <= "Z".charCodeAt(0)) ||
                (c.charCodeAt(0) >= "0".charCodeAt(0) &&  c.charCodeAt(0) <= "9".charCodeAt(0))
                )
    }

    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            while (l < r && !this.isAlpha(s[l])) {
                l++;
            }
            while (l < r && !this.isAlpha(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }

        return true;

    }
}
