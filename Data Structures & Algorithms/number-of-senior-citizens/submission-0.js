class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     * 11, 12
     * s.substrig(11, 13)
     */
    countSeniors(details) {
        let res = 0
        for (const person of details) {
            const age = parseInt(person.substring(11,13));
            if (age > 60) {
                res++;
            }
        }

        return res;
    }
}
