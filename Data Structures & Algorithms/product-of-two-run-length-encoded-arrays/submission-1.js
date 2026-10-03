class Solution {
    /**
     * @param {number[][]} encoded1
     * @param {number[][]} encoded2
     * @return {number[][]}
     */
    findRLEArray(encoded1, encoded2) {
        const arr1 = [];
        for (const [num,freq] of encoded1) {
            for (let i = 0; i < freq; i++) {
                arr1.push(num)
            }
        }

        const arr2 = [];
        for (const [num,freq] of encoded2) {
            for (let i = 0; i < freq; i++) {
                arr2.push(num)
            }
        }
        const prodNums = [];
        for (let i = 0; i < arr2.length; i++) {
            prodNums.push(arr1[i] * arr2[i]);
        };
   
        const res = [];
        let count = 1;
        for (let i = 0; i < prodNums.length; i++) {
            if (i !== prodNums.length - 1 && prodNums[i] === prodNums[i + 1]) {
                count++;
            } else {
                res.push([prodNums[i],count]);
                count = 1;
            }
            
        }
        return res;
        
    }
}
