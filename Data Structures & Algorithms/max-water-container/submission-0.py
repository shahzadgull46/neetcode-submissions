class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height)-1
        waterStorage = 0
        while left < right:
            width = right - left
            area = width * min(height[left], height[right])
            waterStorage = max(area, waterStorage)

            if height[right] > height[left]:
                left += 1
            else:
                right -= 1
        return waterStorage