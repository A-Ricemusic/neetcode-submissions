class Solution {
    /**
     * @param {number[][]} maze
     * @param {number[]} start
     * @param {number[]} destination
     * @return {number}
     * 
     * time:  o(rows * cols)
     * space: o(rows * cols)
     */
    shortestDistance(maze, start, destination) {
        const visited = new Set();
        const rows = maze.length;
        const cols = maze[0].length;
        const heap = new PriorityQueue((a,b) => a[0] - b[0]); 
        heap.enqueue([0, start[0], start[1]])


        while (!heap.isEmpty()) {
            const [dist, r, c] = heap.dequeue();
            let key = `${r},${c}`;
            if (visited.has(key)) continue;
            visited.add(key);

            if (r === destination[0] && c === destination[1]) {
                return dist;
            }
            
            //up
            let nr = r
            let curr = 0
            while (nr - 1 >= 0 && maze[nr - 1][c] === 0) {
                nr--;
                curr++;
            }
            key = 
            heap.enqueue([dist + curr,nr,c])

            //down
            nr = r
            curr = 0
            while (nr + 1 < rows && maze[nr + 1][c] === 0) {
                nr++;
                curr++;
            }
            heap.enqueue([dist + curr,nr,c])

            //left
            let nc = c
            curr = 0
            while (nc - 1 >= 0 && maze[r][nc - 1] === 0) {
                nc--;
                curr++;
            }
            heap.enqueue([dist + curr,r,nc])

            //right
            nc = c
            curr = 0
            while (nc + 1 < cols && maze[r][nc + 1] === 0) {
                nc++;
                curr++;
            }
            heap.enqueue([dist + curr,r,nc])
            
        }

        return -1

        
    }
}
