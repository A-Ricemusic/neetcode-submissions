class Solution:
    def solve(self, board: List[List[str]]) -> None:
        rows, cols = len(board), len(board[0])
        self.visited = set()

        def bfs(r,c):
            curr = [(r,c)]
            q = deque([(r,c)])
            direction = [(1,0), (0,1), (-1,0), (0,-1)]
            self.visited.add((r,c))
            valid = True
            while q:
                r,c = q.popleft()
                for dr,dc in direction:
                    nr = r + dr
                    nc = c + dc
                    if (nr >= rows or nr < 0 or nc >= cols or nc < 0):
                         self.visited.add((nr,nc))
                         valid = False
                         continue
                    if ((nr,nc) in self.visited):
                        continue
                    if board[nr][nc] == "X":
                        self.visited.add((nr,nc))
                        continue
                    if board[nr][nc] == "O":
                        self.visited.add((nr,nc))
                        q.append((nr,nc))
                        curr.append((nr,nc))
            if valid:
                for cr, cc in curr:
                    board[cr][cc] = "X"




        for r in range(rows):
            for c in range(cols):
                if ((r,c) in self.visited or board[r][c] == "X"):
                    continue
                bfs(r,c)

        