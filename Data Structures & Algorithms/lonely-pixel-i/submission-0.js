class Solution {
    /**
     * @param {character[][]} picture
     * @return {number}
     * 
     * time: o(m * n)
     * space: o(m * n)
     */
    findLonelyPixel(picture) {
        const rowMap = new Map();
        const colMap = new Map();
        const rows = picture.length;
        const cols = picture[0].length;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (picture[r][c] === "B") {
                    rowMap.set(r, (rowMap.get(r) || 0) + 1);
                    colMap.set(c, (colMap.get(c) || 0) + 1);
                }
            }
        }

        let res = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (picture[r][c] === "B") {
                    if (rowMap.get(r) === 1 && colMap.get(c) === 1) {
                        res++
                    }
                }
            }
        }

        return res;

    }
}
