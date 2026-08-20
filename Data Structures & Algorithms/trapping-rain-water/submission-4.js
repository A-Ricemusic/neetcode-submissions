class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0;
        let l = 0;
        let r = height.length - 1;
        let lMax = height[l];
        let rMax = height[r];

        while (l <= r) {
            if (lMax <= rMax) {
                lMax = Math.max(lMax, height[l]) 
                if (lMax - height[l] > 0) {
                    res += lMax - height[l] 
                }
                l++;
            } else {
                rMax = Math.max(height[r], rMax)
                if (rMax - height[r] > 0) {
                    res += rMax - height[r]
                }
                r--;
            }
        }


        return res;
        
    }
}
