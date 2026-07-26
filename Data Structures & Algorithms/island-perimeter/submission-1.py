class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        stack = []
        visited = set()
        found = False
        res = 0


        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    stack.append((r,c))
                    found = True
                    break
            if found:
                break
        
        while stack:
            print("stack", stack, "res", res)
            directions = [(1,0), (0,1), (-1,0), (0,-1)]
            r,c = stack.pop()
            
            if ((r,c) in visited):
                continue
            visited.add((r,c))
            for dr, dc in directions:
                nr = dr + r
                nc = dc + c
                if ( nr < 0 or nr >= rows or nc < 0 or nc >= cols or grid[nr][nc] == 0):
                    res += 1
                    continue
                if (nr,nc) not in visited:
                    stack.append((nr,nc))
                
            
        return res

        