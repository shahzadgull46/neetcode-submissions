class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let columns = matrix[0].length

        let left = 0
        let right = Math.floor((rows * columns) - 1)



        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            let IndexValRow = Math.floor(mid / columns)
            let IndexValCol = Math.floor(mid % columns)

            if (matrix[IndexValRow][IndexValCol] === target) {
                return true
            }
            else if (matrix[IndexValRow][IndexValCol] < target) {
                left = mid + 1
            }
            else {
                right = mid - 1
            }

        }
        return false

    }
}
