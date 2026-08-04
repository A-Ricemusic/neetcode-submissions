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
        pac.add("0" + "," + String(cols - 1));
        alt.add("0" + "," + String(cols - 1));
        pac.add(String(rows - 1) + "," + "0");
        alt.add(String(rows - 1) + "," + "0");

        const dfsPac = (r: number, c: number) => {
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
                    pac.has(key)
                ) {
                    continue;
                }

                pac.add(key);
                dfsPac(nr, nc);
            }
        };

        const dfsAlt = (r: number, c: number) => {
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
                    alt.has(key)
                ) {
                    continue;
                }
                alt.add(key);
                dfsAlt(nr, nc);
            }
        };

        for (let c = 0; c < cols; c++) {
            const key: string = "0" + "," + String(c);
            pac.add(key);
            dfsPac(0, c);
        }

        for (let r = 0; r < rows; r++) {
            const key: string = String(r) + "," + "0";
            pac.add(key);
            dfsPac(r, 0);
        }

        for (let c = 0; c < cols; c++) {
            const key: string = String(rows - 1) + "," + String(c);
            alt.add(key);
            dfsAlt(rows - 1, c);
        }

        for (let r = 0; r < rows - 1; r++) {
            const key: string = String(r) + "," + String(cols - 1);
            alt.add(key);
            dfsAlt(r, cols - 1);
        }

        const res: number[][] = [];

        for (const s of pac) {
            if (alt.has(s)) {
                const numArr: number[] = [];
                const arr: string[] = s.split(",");
                for (const i of arr) {
                    numArr.push(parseInt(i));
                }
                res.push(numArr);
            }
        }
        return res;
    }
}
