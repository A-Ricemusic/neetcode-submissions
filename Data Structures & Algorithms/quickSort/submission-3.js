/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs) {
        this.helper(pairs, 0, pairs.length -1)
        return pairs;
    }


    helper(pairs,s,e) {
        if (e - s + 1 <= 1) return
        const pivot = pairs[e]
        let l = s
        for (let i = s; i < e; i++) {
            if (pairs[i].key < pivot.key) {
                [pairs[i],pairs[l]] = [pairs[l],pairs[i]];
                l++
            }
        }
        [pairs[l], pairs[e]] = [pairs[e], pairs[l]];

        this.helper(pairs,s, l - 1)
        this.helper(pairs, l + 1, e)

    }
}
