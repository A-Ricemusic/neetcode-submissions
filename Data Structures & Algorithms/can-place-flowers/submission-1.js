class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let count = 0;

        for (let i = 0; i < flowerbed.length; i++) {
            const left = i - 1 < 0? 0 : flowerbed[i - 1];
            const right = i + 1 >= flowerbed.length? 0 : flowerbed[i + 1];
            if (left === 0 && right === 0 && flowerbed[i] === 0) {
                flowerbed[i] = 1
                count++;
            }
            if (count >= n) return true;
        }

        return count >= n
    }
}
