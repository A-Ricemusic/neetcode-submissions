class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     * "AAABABB"
     * charSet = {A, B}
     * 
     */
    characterReplacement(s: string, k: number): number {
        let res: number = 0;
        let charSet = new Set<string>(s);

        for (let c of charSet) {
            let count: number = 0
            let l: number = 0

            for (let r = 0; r < s.length; r++) {
                if (s[r] === c) {
                    count++;
                }

                while (r - l + 1 - count > k) {
                    if (s[l] === c) {
                        count--;
                    }
                    l++;
                }
                res = Math.max(res, r - l + 1)
            }
        }

        return res
    }
}
