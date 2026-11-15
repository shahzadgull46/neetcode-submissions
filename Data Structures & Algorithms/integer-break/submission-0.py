class Solution:
    def integerBreak(self, n: int) -> int:
        dp = {}
        def dfs(num):
            if num == 1:
                return 1
            if num in dp:
                return dp[num]
            res = 0 if num == n else num

            for i in range(1, num+1):
                val = dfs(num-i)*i
                res = max(res, val)
            dp[num] = res
            return res
        return dfs(n)