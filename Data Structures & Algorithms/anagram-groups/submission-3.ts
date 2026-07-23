class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    isAnagram(str1: string, str2: string): boolean {
        const sSort: string = str1.split('').sort().join()
        const tSort: string = str2.split('').sort().join()

        return sSort === tSort

    }
    groupAnagrams(strs: string[]): string[][] {
        let res: string[][] = []
        let visited: boolean[] = new Array(strs.length).fill(false)

        for (let i = 0; i < strs.length; i++) {
            let curr: string[] = []
            if (visited[i]) {
                continue;
            }
            visited[i] = true
            curr.push(strs[i])
            for (let j = i; j < strs.length; j++) {
                if (!visited[j]) {
                    if (this.isAnagram(strs[i], strs[j])) {
                        curr.push(strs[j])
                        visited[j] = true
                    }
                }
            }
            if (curr.length > 0) {
                res.push(curr)
            }
        }

        return res
    }
}
