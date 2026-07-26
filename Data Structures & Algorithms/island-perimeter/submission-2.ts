class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid: number[][]): number {
        const rows: number = grid.length;
        const cols: number = grid[0].length;
        const visited: Set<string> = new Set<string>();
        let res: number = 0;
        let stack: [number,number][] = [];

        outer: for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    stack.push([r,c])
                    break outer;
                }
            }
        }

        while (stack.length > 0) {
            const [r,c]: [number,number] = stack.pop()
            const key: string = `${r},${c}`
            const directions: [number,number][] = [[1,0], [0,1], [-1,0], [0,-1]]
            if (visited.has(key)) {
                continue;
            } 
            visited.add(key)
            for (let [dr,dc] of directions) {
                const nr: number = r + dr;
                const nc: number = c + dc;
                const newKey: string =  `${nr},${nc}`;
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] === 0) {
                    res++;
                    continue
                }
                if (!visited.has(newKey)) {
                    stack.push([nr,nc])
                }
            }
        }

        return res
    }
}
