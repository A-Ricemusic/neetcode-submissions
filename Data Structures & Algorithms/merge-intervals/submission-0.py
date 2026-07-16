"""
res = [[0,9]]
intervals = [[0,3],[2,7],[6,9],[15,18]]
 
 """

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key= lambda x: x[0] )
        res = []
        for i in range(len(intervals)):
            if len(res) == 0:
                res.append(intervals[i])
            elif res[-1][1] >= intervals[i][0]:
                res[-1][0] = min(res[-1][0],intervals[i][0])
                res[-1][1] = max(res[-1][1],intervals[i][1])
            else:
                res.append(intervals[i])
        
        return res
        