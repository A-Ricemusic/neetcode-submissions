class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let charSet = new Set<string>(s)
        let res: number = 0

        for (let c of charSet) {
            let l: number = 0;
            let count: number = 0;

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

        return res;
    }
}
