"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        intervals.sort(key= lambda x: x.start)
        endTimes = []
        result = 0

        for interval in intervals:
            end = interval.end
            while endTimes and endTimes[0] <= interval.start:
                heapq.heappop(endTimes)
            heapq.heappush(endTimes, end)
            result = max(len(endTimes), result)
        return result
        