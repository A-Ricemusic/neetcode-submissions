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
            const key: string = `${r},${c}`
            

            if (idx === n) {
                return true
            }

            if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[idx]) {
                return false;
            }

            if (visited.has(key)) return false
            visited.add(key)

            const found: boolean = dfs(r + 1, c, idx + 1,visited) || dfs(r - 1, c, idx + 1,visited) 
            || dfs(r, c + 1, idx + 1,visited) || dfs(r, c - 1, idx + 1,visited);

            visited.delete(key);
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
