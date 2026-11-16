class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let ans = [2 * n]
        for (let i = 0; i <= n - 1; i++) {
            ans[i] = nums[i];
            ans[i + n] = nums[i]
        }
        return (ans)
    }
}
