class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        arr = []

        for r in range(len(matrix)):
            for c in range(len(matrix[0])):
                arr.append(matrix[r][c])
        left, right = 0, len(arr) - 1

        while left <= right:
            m = left + ((right - left) // 2)
            if arr[m] > target:
                right = m - 1
            elif arr[m] < target:
                left = m + 1
            else:
                return True
        return False
        