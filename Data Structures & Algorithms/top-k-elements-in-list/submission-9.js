class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        const arr = Object.entries(count).map((pair) => [
            pair[1],
            parseInt(pair[0]),
        ]);

        arr.sort((a,b) => b[0] - a[0])

        console.log(arr)

        return arr.slice(0,k).map((pair) => pair[1])


    }
}
