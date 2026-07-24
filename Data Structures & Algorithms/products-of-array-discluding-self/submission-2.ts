class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */



      /**
     * [1,1,2,8]
     * [48,24,12,1]
     */
    productExceptSelf(nums: number[]): number[] {
        let productLeft: number[] = new Array(nums.length).fill(1);
        let productRight: number[] = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
   
                productLeft[i] = nums[i - 1] * productLeft[i - 1]
        }
        for (let i = nums.length - 2; i >= 0; i--) {
 
                productRight[i] = nums[i + 1] * productRight[i + 1]
        }
        console.log(productRight)
        console.log(productLeft)
        let res: number[] = []

        for (let i = 0; i < nums.length; i++) {
            let curr: number = productRight[i] * productLeft[i];
            res.push(curr)
        }


        return res

    }
}
