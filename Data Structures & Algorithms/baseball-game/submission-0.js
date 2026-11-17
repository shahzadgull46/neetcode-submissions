class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let totalPoints = [];

        for (let number of operations) {
            let typenumber = Number(number);
            if (Number.isInteger(typenumber)) {
                totalPoints.push(number);
            }
            if (number === "+") {
                let firstPrevious = totalPoints[totalPoints.length - 1];
                let secodPrevious = totalPoints[totalPoints.length - 2];
                const previousNumsSum = Number(firstPrevious) + Number(secodPrevious);
                totalPoints.push(previousNumsSum);
            }
            if (number === "D") {
                let latestOne = Number(totalPoints[totalPoints.length - 1]);
                totalPoints.push(2 * latestOne);
            }
            if (number === "C") {
                totalPoints.pop(Number(number));
            }
        }
        let total = 0;
        for (const score of totalPoints) {
            total += Number(score);
        }
        return (total);
    }
}
