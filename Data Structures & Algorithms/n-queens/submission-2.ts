class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
   
    solveNQueens(n: number): string[][] {
        let res: string[][] = [];
        const grid = Array.from({length: n}, () => new Array(n).fill("."))
        const hashMap: Record<string,number> = {}

        
        const updateMap = (r: number, c:  number) => {
            let count: number = 1;
            for (let i = r + 1; i < n; i++) {
                let key: string = `${i},${c}`
                if (!(key in hashMap)) {
                    hashMap[key] = 0;
                }
                hashMap[key]++;
                if (c - count >= 0) {
                    key = `${i},${c - count}`
                    if (!(key in hashMap)) {
                        hashMap[key] = 0;
                    }
                    hashMap[key]++;
                }

                if (c + count < n) {
                    key = `${i},${c + count}`
                    if (!(key in hashMap)) {
                        hashMap[key] = 0;
                    }
                    hashMap[key]++;
                }
                count++;
            }

        }

        const fixMap = (r: number, c: number) => {
            let count: number = 1;
            for (let i = r + 1; i < n; i++) {
                let key: string = `${i},${c}`
                hashMap[key]--;
                if (c - count >= 0) {
                    key = `${i},${c - count}`
                    hashMap[key]--;
                }

                if (c + count < n) {
                    key = `${i},${c + count}`
                    hashMap[key]--;
                }
                count++;
            }

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
                const key: string = `${r},${c}` 
                if (!(key in hashMap) || hashMap[key] === 0) {
                    grid[r][c] = "Q";
                    updateMap(r,c)
                    dfs(queenPlaced + 1);
                    fixMap(r,c)
                    grid[r][c] = ".";
                    
                }
                
            }
        }

        dfs(0);
        return res;
    }
}

