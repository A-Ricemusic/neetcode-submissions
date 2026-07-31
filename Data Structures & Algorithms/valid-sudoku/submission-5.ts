class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows: Record<number, Set<string>> = {};
        const cols: Record<number, Set<string>> = {};
        const squares: Record<number, Set<string>> = {
            1: new Set<string>(),
            2: new Set<string>(),
            3: new Set<string>(),
            4: new Set<string>(),
            5: new Set<string>(),
            6: new Set<string>(),
            7: new Set<string>(),
            8: new Set<string>(),
            9: new Set<string>(),
        };

        //iterating through rows
        for (let r = 0; r < board.length; r++) {
            rows[r] = new Set<string>();
            for (let c = 0; c < board[0].length; c++) {
                if (board[r][c] === ".") {
                    continue;
                }
                  if (!cols[c]) {
                    cols[c] = new Set<string>();
                }

                if (rows[r].has(board[r][c]) || cols[c].has(board[r][c])) {
                    return false;
                }
                rows[r].add(board[r][c]);
                cols[c].add(board[r][c])


                //iterating through squares
                let square: number = -1;
                if (r <= 2 && c <= 2) {
                    square = 1;
                } else if (r <= 2 && c > 2 && c <= 5) {
                    square = 2;
                } else if (r <= 2 && c > 5 && c <= 8) {
                    square = 3;
                } else if (r > 2 && r <= 5 && c <= 2) {
                    square = 4;
                } else if (r > 2 && r <= 5 && c > 2 && c <= 5) {
                    square = 5;
                } else if (r > 2 && r <= 5 && c > 5 && c <= 8) {
                    square = 6;
                } else if (r > 5 && r <= 8 && c <= 2) {
                    square = 7;
                } else if (r > 5 && r <= 8 && c > 2 && c <= 5) {
                    square = 8;
                } else if (r > 5 && r <= 8 && c > 5 && c <= 8) {
                    square = 9;
                }

                if (squares[square].has(board[r][c])) {
                    return false;
                } else {
                    squares[square].add(board[r][c]);
                }
            }
        }

        return true;
    }
}
