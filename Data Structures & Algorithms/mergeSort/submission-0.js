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
    mergeSort(pairs) {
        return this.helper(pairs, 0 , pairs.length - 1)
    }

    helper(arr,l, r) {
        if (r - l + 1 <= 1) {
            return arr;
        }
        const m = Math.floor((r + l) / 2)
        this.helper(arr,l,m)
        this.helper(arr,m + 1, r)
        this.merge(arr, l, m ,r)
        return arr
    }

    merge(arr, l, m ,r) {
        const L = arr.slice(l, m + 1);
        const R = arr.slice(m + 1, r + 1);

        let i = 0;
        let j = 0;
        let k = l;

        while (i < L.length && j < R.length) {
            if (L[i].key <= R[j].key) {
                arr[k] = L[i];
                i++
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < L.length) {
            arr[k] = L[i]
            i++;
            k++
        }

        while (j < R.length) {
            arr[k] = R[j];
            j++;
            k++;
        }

    }
}
