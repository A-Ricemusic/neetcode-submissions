class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const rows: number = heights.length;
        const cols: number = heights[0].length;
        const pac: Set<string> = new Set<string>();
        const alt: Set<string> = new Set<string>();
        const dirs: number[][] = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const dfs = (r: number, c: number, ocean: Set<string>) => {
            for (const dir of dirs) {
                let nr: number = dir[0] + r;
                let nc: number = dir[1] + c;
                const key: string = String(nr) + "," + String(nc);
                if (
                    nr < 0 ||
                    nc < 0 ||
                    nr >= rows ||
                    nc >= cols ||
                    heights[nr][nc] < heights[r][c] ||
                    ocean.has(key)
                ) {
                    continue;
                }
                ocean.add(key);
                dfs(nr,nc,ocean);
            }
        };

        for (let c = 0; c < cols; c++) {
            const key: string = "0" + "," + String(c);
            pac.add(key);
            dfs(0, c, pac);
        }

        for (let r = 0; r < rows; r++) {
            const key: string = String(r) + "," + "0";
            pac.add(key);
            dfs(r, 0,pac);
        }

        for (let c = 0; c < cols; c++) {
            const key: string = String(rows - 1) + "," + String(c);
            alt.add(key);
            dfs(rows - 1, c,alt);
        }

        for (let r = 0; r < rows - 1; r++) {
            const key: string = String(r) + "," + String(cols - 1);
            alt.add(key);
            dfs(r, cols - 1,alt);
        }

        const res: number[][] = [];

        for (const key of pac) {
            if (alt.has(key)) {
                res.push(key.split(",").map(Number));
            }
        }
        return res;
    }
}
