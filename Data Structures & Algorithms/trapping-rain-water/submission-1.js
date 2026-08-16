class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n =  height.length
        const leftH = new Array(n).fill(0)
        const rightH = new Array(n).fill(0)
        if (n < 3) return 0;
        for (let i = 1; i < n; i++) {
            leftH[i] = Math.max(leftH[i - 1], height[i - 1])
        }
        for (let i = n - 2; i >= 0; i--) {
            rightH[i] = Math.max(rightH[i + 1], height[i + 1])
        }

        let res = 0
        for (let i = 0; i < n; i++) {
            const curr = Math.min(leftH[i], rightH[i]) - height[i];
            if (curr <= 0) continue;
            res += curr;
        }

        return res;

    }
}
