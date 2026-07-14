class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        q = deque()
        fresh = 0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 2:
                    q.append((r,c))
                elif grid[r][c] == 1:
                    fresh += 1
        
        minutes = 0
        direction = [(1,0), (0,1), (-1,0), (0,-1)]

        while q and fresh > 0:
            for _ in range(len(q)):
                r, c = q.popleft()
                for dr, dc in direction:
                    nr = dr + r
                    nc = dc + c
                    if (0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1): 
                        grid[nr][nc] = 2
                        q.append((nr,nc))
                        fresh -= 1
                    
            minutes += 1
        return minutes if fresh == 0 else -1

        
        