class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let left = 1
        let right = Math.max(...piles)
        let result=0
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            let k = mid
            let totalHours = 0
            for(let pile of piles){
           totalHours += Math.ceil(pile / k)
            }

            if (totalHours <= h) {
                result = mid
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }
        return result
    }
}
