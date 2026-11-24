class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let target = k - 1
        let s = 0
        let end = points.length - 1

        while (s <= end) {
            const pivot = points[end]
            const [Pivotx, Pivoty] = pivot
            const pivotDistance = Pivotx * Pivotx + Pivoty * Pivoty
            let left = s

            for (let i = s; i < end; i++) {
                const [x, y] = points[i]
                let distance = x * x + y * y
                if (distance < pivotDistance) {
                    let temp = points[left]
                    points[left] = points[i]
                    points[i] = temp
                    left++
                }

            }
            let temp = points[left]
            points[left] = points[end]
            points[end] = temp

            if (left === target) {
                break;
            }
            else if (left > target) {
                end = left - 1
            }
            else {
                s = left + 1
            }

        }
        return points.slice(0,k)

    }
}
