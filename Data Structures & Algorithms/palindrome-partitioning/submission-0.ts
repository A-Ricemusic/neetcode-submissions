class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     * 
     *    "aab"
     *         a       aa  aab
     *        a. ab.  b     
     *       b
     * 
     * 
     */
    isPal(s:string) {
        let l: number = 0;
        let r: number = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) {
                return false
            }
            l++;
            r--;
        }

        return true
        
    }

    partition(s: string): string[][] {
        const res: string[][] = [];
        const part: string[] = []

        const dfs = (i: number): void => {
            if (i >= s.length) {
                res.push([...part])
            }

            for (let j = i; j < s.length; j++) {
                if (this.isPal(s.substring(i, j + 1))) {
                    part.push(s.substring(i, j + 1))
                    dfs(j + 1)
                    part.pop()
                }
            }
            
        }
        
        dfs(0);
        return res;
    }
}
