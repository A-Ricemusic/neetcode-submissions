class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if (digits.length === 0) {
            return [];
        }
        const res: string[] = []
        const hashMap: Record<string,string[]> = {
            '2': ["a", "b", "c"],
            '3': ["d","e","f"],
            '4': ["g", "h", "i"],
            '5': ["j", "k", "l"],
            '6': ["m","n","o"],
            '7': ["p","q","r","s"],
            '8': ["t","u","v"],
            '9': ["w","x","y","z"]
        }


        const dfs = (i: number, str: string[]) => {
            if (i === digits.length) {
                res.push(str.join(''))
                return
            }

            const digit: string = digits[i]

            for (const ltr of hashMap[digit]) {
                str.push(ltr)
                dfs(i + 1,str)
                str.pop()
            }

        }


        dfs(0,[])

        return res

    }
}
