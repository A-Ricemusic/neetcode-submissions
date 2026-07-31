class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows: Record<number, Set<string>> = {};
        const cols: Record<number, Set<string>> = {};
        const squares: Record<string, Set<string>> = {};

        //iterating through rows
        for (let r = 0; r < board.length; r++) {
            rows[r] = new Set<string>();
            for (let c = 0; c < board[0].length; c++) {
                if (board[r][c] === ".") {
                    continue;
                }
                const squareKey: string =
                    String(Math.floor(r / 3)) + "," + String(Math.floor(c / 3));

                if (!cols[c]) {
                    cols[c] = new Set<string>();
                }

                if (!squares[squareKey]) {
                    squares[squareKey] = new Set<string>();
                }

                if (
                    rows[r].has(board[r][c]) ||
                    cols[c].has(board[r][c]) ||
                    squares[squareKey].has(board[r][c])
                ) {
                    return false;
                }
                rows[r].add(board[r][c]);
                cols[c].add(board[r][c]);
                squares[squareKey].add(board[r][c]);
            }
        }

        return true;
    }
}
