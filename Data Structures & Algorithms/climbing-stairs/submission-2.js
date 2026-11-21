class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.memo = new Map()
    }
    climbStairs(n) {
        if (n <= 2) {
            return n
        }
        if (this.memo.has(n)) {
            return this.memo.get(n)
        }

        const answer = this.climbStairs(n - 1) + this.climbStairs(n - 2)
        this.memo.set(n, answer)


        return answer
    }
}
