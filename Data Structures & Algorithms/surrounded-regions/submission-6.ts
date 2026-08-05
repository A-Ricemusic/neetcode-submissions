class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     * 
     * 1.) run though the matrix and look for an O
     * 2.) we run a DFS on the cells we find
     * 3.) have an array denoting cells you visit in dfs
     * 4.) if its surronded make those cells in array X's
     * 5.) if not surrounded break and clear array
     * 
     * 
     */
    solve(board: string[][]): void {
        const rows: number = board.length;
        const cols: number = board[0].length;

        const bfs = (r: number, c: number) => {
            const q: number[][] = [];
            const directions: number[][] = [[1,0], [-1,0], [0,1], [0,-1]]
            const visited: number[][] = [];
            let surrounded: boolean = true;
            board[r][c] = "T"
            q.push([r,c])
            visited.push([r,c])
            while (q.length > 0) {
                const size: number = q.length
                for (let i: number = 0; i < size; i++) {
                    const [r,c] = q.shift();
                    for (const dir of directions) {
                        const nr: number = r + dir[0];
                        const nc: number = c + dir[1];
                        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
                            surrounded = false;
                            continue;
                        }

                        if (board[nr][nc] === "O") {
                            board[nr][nc] = "T"
                            q.push([nr,nc]);
                            visited.push([nr,nc])
                        }
                    }
                }
            }

            if (surrounded) {
                for (const node of visited) {
                    board[node[0]][node[1]] = "X";
                }
            }

        }


        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === "O") {
                    bfs(r,c)
                }
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === "T") {
                    board[r][c] = "O"
                }
            }
        }
    }
}
