class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let l = 0;
        let sum = 0;
        let res = 0;

        for (let r = 0; r < arr.length; r++) {
            sum += arr[r];

            if (r - l + 1 > k) {
                sum -= arr[l];
                l++;
            }

            if (sum / k >= threshold && r - l + 1 === k) {
                res++;
            }
        }

        return res;
    }
}
