class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
   
    solveNQueens(n: number): string[][] {
        let res: string[][] = [];
        const grid = Array.from({length: n}, () => new Array(n).fill("."))

        const canPlaceCol = (r: number, c: number) => {
            for (let i = r; i >= 0; i--) {
                if (grid[i][c] === "Q") return false;
            }
            return true;

        }
        

        const canPlaceDagRight = (r: number, c: number) => {
            let count: number = 0;
            for (let i = r; i >= 0; i--) {
                const nc1: number = c + count;
                if (nc1 >= n || nc1 < 0) continue;
                if (grid[i][nc1] === "Q" ) return false;
                count++;
            }
            return true;

        }

        const canPlaceDagLeft = (r: number, c: number) => {
            let count: number = 0;
            for (let i = r; i >= 0; i--) {
                const nc2: number = c - count;
                if (nc2 >= n || nc2 < 0) continue;
                if (grid[i][nc2] === "Q" ) return false;
                count++;
            }
            return true;

        }

        
        const dfs = (queenPlaced: number) => {
            if (queenPlaced === n) {
                let newGrid: string[] = []
                for (let i = 0; i < n; i++) {
                    newGrid.push(grid[i].join(""))
                }
                res.push(newGrid)
                return
            }
            const r: number = queenPlaced;
            for (let c = 0; c < n; c++) {
                // console.log(grid)
                // console.log("canPlaceCol",canPlaceCol(r,c))
                // console.log("Can PLace Dag Right",canPlaceDagRight(r,c) )
                // console.log("Can Place Dag Left",canPlaceDagLeft(r,c))
                if (canPlaceCol(r,c) && canPlaceDagRight(r,c) && canPlaceDagLeft(r,c)) {
                    grid[r][c] = "Q";
                    dfs(queenPlaced + 1);
                    grid[r][c] = ".";
                }
                
            }
        }

        dfs(0);
        return res;
    }
}

