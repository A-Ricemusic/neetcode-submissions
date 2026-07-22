class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        zeros = []

        for r in range(len(matrix)):
            for c in range(len(matrix[0])):
                if matrix[r][c] == 0:
                    zeros.append((r,c))
        
        for r,c in zeros:
            for i in range(len(matrix[0])):
                matrix[r][i] = 0
            
            for i in range(len(matrix)):
                matrix[i][c] = 0
        
        