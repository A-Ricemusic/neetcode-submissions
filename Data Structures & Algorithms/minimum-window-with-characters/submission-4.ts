class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (s.length < t.length) {
            return "";
        }

        let res: string = "";
        let resLen: number = 10001;
        let tCount: Record<string,number> = {};
        let sCount: Record<string, number> = {};
        let l: number = 0;
        let count: number = 0;

        for (let c of t) {
            tCount[c] = (tCount[c] || 0) + 1;
        }
        
        for (let r = 0; r < s.length; r++) {
            if (s[r] in tCount) {
                sCount[s[r]] = (sCount[s[r]] || 0) + 1
                if (sCount[s[r]] === tCount[s[r]]) {
                    count++;
                }
            }

            while (count === Object.keys(tCount).length) {
                if (r - l + 1 < resLen) {
                    res = s.substring(l, r + 1);
                    resLen = r - l + 1;
                }
                if (s[l] in tCount) {
                    sCount[s[l]]--;
                    if (sCount[s[l]] < tCount[s[l]]) {
                        count--;
                    }
                }
                l++;

            }
            
        }
        
        return res;
    }
}
