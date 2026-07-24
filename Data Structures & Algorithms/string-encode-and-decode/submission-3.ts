class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */


    /**
     *  strs = ["Hello","World"]
     * "5Hello#4World"
     *
     */
    encode(strs: string[]): string {
        let res: string = "";

        for (let s of strs) {
            res += s.length.toString()
            res += "#"
            for (let c of s) {
                res += c
            }
            
        }
        return res;



    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res: string[] = []
        let i: number = 0;
        while (i < str.length) {
            let curr: string = ""
            let currCount: string = ""
            while (str[i] != "#") {
                currCount += str[i];
                i++
            }
            i++
            let count: number = parseInt(currCount)
            for (let j = 0; j < count; j++) {
                curr += str[i]
                i++
            }
            res.push(curr)
        }
        return res

        
    }
}
