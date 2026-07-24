class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left: number = 0
        let right: number = heights.length - 1
        let maxArea: number = 0

        while (left < right) {
            let currArea: number = (right - left) * Math.min(heights[left],heights[right])
            maxArea = Math.max(currArea, maxArea)

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea
    }
}
