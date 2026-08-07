class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const rows: number = board.length;
        const cols: number = board[0].length;
        const n: number = word.length;

        const dfs = (r: number, c: number, idx: number, visited: Set<string>): boolean => {

            if (idx === n) {
                return true
            }

            if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[idx]) {
                return false;
            }
            const tmp: string = board[r][c]
            board[r][c] = "#"

            const found: boolean = dfs(r + 1, c, idx + 1,visited) || dfs(r - 1, c, idx + 1,visited) 
            || dfs(r, c + 1, idx + 1,visited) || dfs(r, c - 1, idx + 1,visited);

            board[r][c] = tmp
            return found; 


        }



        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === word[0]) {
                    const visited: Set<string> = new Set<string>();
                    if (dfs(r,c,0,visited)) return true;
                }
            }
        }
        return false;

    }
}
