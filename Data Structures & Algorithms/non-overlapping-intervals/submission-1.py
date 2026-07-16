"""

arr = [[1,11]]
intervals=[[1,100],[2,11],[2,12][11,22]]


"""



class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x: x[0])
        arr = []
        for i in range(len(intervals)):
            if len(arr) == 0:
                arr.append(intervals[i])
            elif intervals[i][0] < arr[-1][1]:
                arr[-1][1] = min(intervals[i][1],arr[-1][1])
            else:
                arr.append(intervals[i])
        return len(intervals) - len(arr)
        