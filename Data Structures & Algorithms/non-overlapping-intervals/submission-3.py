class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda x: x[0])
        valid = 0
        res = 0
        for i in range(1, len(intervals)):
            if intervals[i][0] < intervals[valid][1]:
                intervals[valid][1] = min(intervals[i][1],intervals[valid][1])
                res += 1
            else:
                valid = i
        return res
        