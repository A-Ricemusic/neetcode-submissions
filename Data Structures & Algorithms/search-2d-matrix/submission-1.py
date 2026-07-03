class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        ROWS, COLS = len(matrix), len(matrix[0])

        topRow, btmRow = 0, ROWS - 1

        while topRow <= btmRow:
            m = (topRow + btmRow) // 2
            if target > matrix[m][-1]:
                topRow = m + 1
            elif target < matrix[m][0]:
                btmRow = m - 1
            else:
                break
        if not (topRow <= btmRow):
            return False
        
        row = matrix[m]
        l, r = 0, COLS -1

        while l <= r:
            m = l + ((r - l) // 2)

            if row[m] > target:
                r = m - 1
            elif row[m] < target:
                l = m + 1
            else:
                return True
        return False
        


        