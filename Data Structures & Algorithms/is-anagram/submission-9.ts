class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }

        const sSort: string = s.split('').sort().join()
        const tSort: string = t.split('').sort().join()

        return sSort === tSort
    }
}
