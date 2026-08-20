class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        const hashMap = {
            "I": 1,
            "IV": 4,
            "V": 5,
            "IX": 9,
            "X": 10,
            "XL": 40,
            "L": 50,
            "XC": 90,
            "C": 100,
            "CD": 400,
            "D": 500,
            "CM": 900,
            "M": 1000
        }


        let i = 0;
        let res = 0;
        while (i < s.length) {
            if ((s.substring(i,i + 2) in hashMap)) {
                res += hashMap[s.substring(i,i + 2)]
                i += 2
            } else {
                res += hashMap[s.substring(i,i + 1)]
                i += 1
            }
        }

        return res;
    }
}
