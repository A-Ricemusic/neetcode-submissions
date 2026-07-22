class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        newMatrix = [[] for _ in range(len(matrix))]

        for c in range(len(matrix)):
            for r in range(len(matrix) - 1, -1, -1):
                newMatrix[c].append(matrix[r][c])
        matrix[:] = newMatrix

        