class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums: number[], k: number): number {
        let l: number = Math.max(...nums); //10
        let r: number = nums.reduce((a,c) => a + c, 0); //22
        let res: number = r;

        while (l <= r) {
            const m: number = Math.floor(l + (r - l) / 2); //16
            let arrCount: number = 1;
            let count: number = 0;
            for (const num of nums) {
                count += num;
                if (count > m) {
                    count = num
                    arrCount++;
                }
            }
            if (arrCount <= k) {
                res = m
                r = m - 1
            } else {
                l = m + 1
            }

        }
        return res;
       

    }
}
