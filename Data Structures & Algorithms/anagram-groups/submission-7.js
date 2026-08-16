class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}
        for (const s of strs) {
            const arr = new Array(26).fill(0)
            for (const c of s) {
                arr[c.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            const key = arr.join(',')
            if (!(key in res)) {
                res[key] = [s];
            } else {
                res[key].push(s);
            }
        }
        return Object.values(res)
    }
}
