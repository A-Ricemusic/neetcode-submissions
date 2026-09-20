class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * 
     * n = total nums in array
     * k = nums of frequency 1;
     * time: O(nlog(k)
     * space: o(n)
     */
    largestUniqueNumber(nums) {
        const heap = new PriorityQueue((a,b) => b - a);

        const hashMap = new Map();
        for (const num of nums) {
            hashMap.set(num, (hashMap.get(num) ?? 0) + 1);
        };
        for (const [num,freq] of hashMap.entries()) {
            if (freq === 1) {
                heap.enqueue(num)
            }
        }

        return heap.isEmpty()? -1 : heap.front();
    }
}
