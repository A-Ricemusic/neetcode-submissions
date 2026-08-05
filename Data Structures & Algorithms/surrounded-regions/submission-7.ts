class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const rows: number = board.length;
        const cols: number = board[0].length;

        const dfs = (r: number, c: number): void => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== "O") {
                return
            }
            board[r][c] = "T"
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);

        };


        for (let c = 0; c < cols; c++) {
            if (board[0][c] === "O") {
                dfs(0,c);
            }

            if (board[rows - 1][c] === "O") {
                dfs(rows - 1,c);
            }
        }

         for (let r = 0; r < rows; r++) {
            if (board[r][0] === "O") {
                dfs(r,0);
            }

            if (board[r][cols - 1] === "O") {
                dfs(r,cols - 1);
            }
        }


        for (let r: number = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X"
                } else if (board[r][c] === "T") {
                    board[r][c] = "O"
                }
            }
        }

    }
}
