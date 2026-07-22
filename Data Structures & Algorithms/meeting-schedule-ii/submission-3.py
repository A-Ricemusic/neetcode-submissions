"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        if len(intervals) == 0:
            return 0

        intervals.sort(key=lambda x: x.start)
        heap = []

        for interval in intervals:
            if heap and heap[0] <= interval.start:
                heapq.heappop(heap)
            heapq.heappush(heap, interval.end)
        
        return len(heap)

       
       

        



        return len(rooms)

        