class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        l, r = 0, sum(weights)

        def canShip(capacity):
            i, carrying, daysUsed = 0, 0, 0
            while i < len(weights):
                if weights[i] > capacity:
                    return False
                if carrying + weights[i] <= capacity:
                    carrying += weights[i]
                else:
                    carrying = weights[i]
                    daysUsed += 1
                
                i += 1
            return daysUsed < days
        
        while l <= r:
            capacity = l + (r-l) // 2

            if canShip(capacity):
                r = capacity - 1
            else:
                l = capacity + 1
                
        
        return r + 1



        

"""
What can be our maximum answer?
It can be sum(weights)




"""