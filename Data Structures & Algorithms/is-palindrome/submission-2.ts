class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    alphaNum(c) {
        return (
            (c >= "A" && c <= "Z") ||
            (c >= "a" && c <= "z") ||
            (c >="0" && c <= "9")
        )
    }
    isPalindrome(s: string): boolean {
        let l: number = 0;
        let r: number = s.length - 1

        while (l < r) {
            while (l < r && !this.alphaNum(s[l])) {
                l++;
            }
            while (l < r && !this.alphaNum(s[r])) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }
            l++
            r--
        }
        return true
    }
}
