class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        self.res = False
        def backtrack(r,c,curr):
            if r < 0 or c < 0 or r >= len(board) or c >= len(board[0]) or self.res or board[r][c] == "#":
                return 
            
            curr += board[r][c]

            if not word.startswith(curr):
                return
            if curr == word:
                self.res = True
                return 

            temp = board[r][c]
            board[r][c] = "#"
            backtrack(r - 1,c,curr)
            backtrack(r + 1,c,curr)
            backtrack(r,c - 1,curr)
            backtrack(r,c + 1,curr)
            board[r][c] = temp

        
        for r in range(len(board)):
            for c in range(len(board[0])):
                backtrack(r,c,"")
        return self.res
        