class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    restoreIpAddresses(s: string): string[] {
        const res: string[] = []

        const dfs = (i: number, curr: string[]) => {
            if (i === s.length && curr.length === 4) {
                res.push(curr.join("."));
                return
            }
            if (curr.length >= 4) {
                return
            }

            for (let j = i; j < s.length; j++) {
                const substring = s.substring(i,j + 1);
                if (substring[0] === "0" && substring.length > 1) continue;
                if (parseInt(substring) > 255) continue;
                if (s.length - substring.length + curr.length + 1 >= 4) {
                    curr.push(substring)
                    dfs(j + 1,curr)
                    curr.pop()
                }
            }


        }

        dfs(0,[])
        return res;
    }
}
