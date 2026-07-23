class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let res: Record<string, string[]> = {}

        for (let s of strs) {
            const key = s.split('').sort().join()
            if (!(key in res)) {
                res[key] = []
            } 
            res[key].push(s)
        }

        return Object.values(res)
    }
}
