class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let sCount: Record<string, number> = {}
        let tCount: Record<string, number> = {}

        if (t.length !== s.length) {
            return false
        }



        for (let i = 0; i < s.length; i++) {
            if (!(s[i] in sCount)) {
                sCount[s[i]] = 1
            } else {
                sCount[s[i]] = sCount[s[i]] + 1;
            }
        }

         for (let i = 0; i < t.length; i++) {
            if (!(t[i] in tCount)) {
                tCount[t[i]] = 1
            } else {
                tCount[t[i]] = tCount[t[i]] + 1;
            }
        }


        for (let i = 0; i < t.length; i++) {
            if (!(s[i] in tCount)) {
                return false
            } else {
                if (sCount[s[i]] !== tCount[s[i]]) {
                    return false
                }
            }
        }
        return true
        
        }
}
