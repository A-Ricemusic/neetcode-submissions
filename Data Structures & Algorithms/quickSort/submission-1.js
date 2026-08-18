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
        this.helper(pairs,0,pairs.length - 1);
        return pairs;
    }


    helper(arr, s, e) {
        if (e - s + 1 <= 1) return;
        const pivot = arr[e]
        let l = s
        for (let i = s; i < e; i++) {
            if (arr[i].key < pivot.key) {
                [arr[i], arr[l]] = [arr[l], arr[i]];
                l++
            }
        }
        [arr[l], arr[e]] = [arr[e], arr[l]];

        this.helper(arr,s, l - 1)
        this.helper(arr, l + 1, e)
    }
}
