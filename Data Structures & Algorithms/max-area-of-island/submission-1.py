class Solution:
    def bfs(self,r,c,grid):
        q = deque([(r,c)])
        rows, cols = len(grid), len(grid[0])
        area = 0
        directions = [(1,0), (0,1), (-1,0), (0,-1)]
        self.visited.add((r,c))
        while q:
            r, c = q.popleft()
            area += 1
            for dr, dc in directions:
                nr = dr + r
                nc = dc + c
                if ((nr,nc) not in self.visited and 0 <= nr < rows and 
                0 <= nc < cols and grid[nr][nc] == 1):
                    q.append((nr,nc))
                    self.visited.add((nr,nc))
        self.maxArea = max(area, self.maxArea)
                    

        

    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        self.visited = set()
        self.maxArea = 0
        rows, cols = len(grid), len(grid[0])

        for r in range(rows):
            for c in range(cols):
                if ((r,c) in self.visited or grid[r][c] == 0):
                    continue
                self.bfs(r,c,grid)
        return self.maxArea

        