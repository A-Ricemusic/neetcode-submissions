class Solution {
    /**
     * @param {number[][]} arrays
     * @return {number}

     */
    maxDistance(arrays) {
        let arr = arrays[0]
        let minGuess = arr.at(0);
        let maxGuess = arr.at(-1);
        let currMin = minGuess
        let currMax = maxGuess
        let res = 0
        

        for (let i = 1; i < arrays.length; i++) {
            const arr1 = arrays[i]
            minGuess = arr1[0];
            maxGuess = arr1.at(-1);
            const maxDiff = Math.abs(maxGuess - currMin);
            const minDiff = Math.abs(currMax - minGuess)
            if (maxDiff > minDiff && Math.abs(maxGuess - currMin) > res) {
                currMax = maxGuess 
                res = maxDiff
            } else if (minDiff > res) {
                currMin = minGuess
                res = minDiff
            }
        };

        return res

    }
}
