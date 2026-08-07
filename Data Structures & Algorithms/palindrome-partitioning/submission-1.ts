class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     * aabab
     */

    isPal(s1: string): boolean {
        let l: number = 0;
        let r: number = s1.length - 1;
        while (l < r) {
            if (s1[l] !== s1[r]) return false;
            l++;
            r--;
        }
        return true;
    }

    partition(s: string): string[][] {
        const res: string[][] = [];

        const dfs = (i: number, currString: string, curr: string[]) => {
           
            if (i === s.length && this.isPal(currString)) {
                if (currString === "") {
                    res.push([...curr]);
                } else {
                    res.push([...curr, currString]);
                }
            }

            if (i === s.length) {
                return;
            }
            currString += s[i];
            dfs(i + 1, currString, curr);
            if (i + 1 < s.length && this.isPal(currString)) {
                curr.push(currString);
                dfs(i + 1, "", curr);
                curr.pop();
            }
            
        };

        dfs(0, "", []);
        return res;
    }
}
