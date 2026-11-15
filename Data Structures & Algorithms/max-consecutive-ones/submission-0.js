class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let currentCount = 0;

        for (let number of nums) {
            if (number === 1) {
                currentCount++;
            } else {
                currentCount = 0;
            }

            maxCount = Math.max(currentCount, maxCount);
        }
        return (maxCount);
    }
}

