class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) return 0;
        const n =  height.length
        let res = 0;
        let l = 0;
        let r = n - 1;
        let lMax = height[l];
        let rMax = height[r];
        while (l < r) {
            if (lMax < rMax) {
                l++;
                lMax = Math.max(height[l], lMax)
                res += lMax - height[l]
            } else {
                r--;
                rMax = Math.max(height[r], rMax)
                res += rMax - height[r]
            }
        }

        return res

    }
}
