class Solution:

    def __init__(self):
        self.visited = set()
    
    def bfs(self,r,c,grid):
        rows, cols = len(grid), len(grid[0])
        q = deque([(r,c)])
        directions = [(1,0), (0,1), (-1,0), (0,-1)]
        self.visited.add((r,c))
        while q:
            r, c = q.popleft()
            for dr, dc in directions:
                nr = dr + r
                nc = dc + c
                if ((nr,nc) not in self.visited and 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == "1"):
                    self.visited.add((nr,nc))
                    q.append((nr, nc))

    def numIslands(self, grid: List[List[str]]) -> int:
        rows, cols = len(grid), len(grid[0])
        island = 0
        for r in range(rows):
            for c in range(cols):
                if (r,c) in self.visited or grid[r][c] == "0":
                    continue
                island += 1
                self.bfs(r,c,grid)
        return island
                
                
        