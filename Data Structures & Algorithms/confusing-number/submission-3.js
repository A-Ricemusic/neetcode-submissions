class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    confusingNumber(n) {
        let hashSet = {
            '0': '0',
            '1': '1',
            '2': '-1',
            '3': '-1',
            '4': '-1',
            '5': '-1',
            '6': '9',
            '7': '-1',
            '8': '8',
            '9': '6',
        }

        let arr = String(n).split("").reverse()
        for (let i = 0; i < arr.length; i++) {
            if (hashSet[arr[i]] === '-1') {
                return false;
            }
            arr[i] = hashSet[arr[i]]
        }
        return !(parseInt(arr.join("")) === n)
    }
}
