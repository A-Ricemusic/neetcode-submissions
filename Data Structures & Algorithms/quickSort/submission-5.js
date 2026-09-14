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
        this.quickSortHelper(pairs,0, pairs.length - 1);
        return pairs;
    }

    quickSortHelper(pairs,s,e) {
        if (e - s + 1 <= 1) return 
        let pivot = pairs[e].key
        let l = s;
        for (let r = s; r < e; r++) {
            if (pairs[r].key < pivot) {
                [pairs[r], pairs[l]] = [pairs[l], pairs[r]];
                l++;
            }
        }
        [pairs[l], pairs[e]] = [pairs[e], pairs[l]];
        this.quickSortHelper(pairs,s, l - 1)
        this.quickSortHelper(pairs,l + 1, e)


    }


}
