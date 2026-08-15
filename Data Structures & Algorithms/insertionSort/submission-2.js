/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        const n = pairs.length;
        const res = []
        if (pairs.length === 0) return []
        res.push([...pairs])

        for (let i = 1; i < n; i++) {
            let j = i
            while (j >= 1 && pairs[j].key < pairs[j - 1].key) {
                [pairs[j], pairs[j - 1]] = [pairs[j - 1], pairs[j]];
                j--;
            }
            res.push([...pairs])
        }

        return res
    }
}
