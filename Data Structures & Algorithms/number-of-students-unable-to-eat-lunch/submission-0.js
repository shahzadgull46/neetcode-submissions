class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let refusalcounter = 0;
        while (students.length > 0 && refusalcounter < students.length) {
            if (students[0] === sandwiches[0]) {
                students.shift()
                sandwiches.shift()
                refusalcounter = 0
            }
            else {
                let removed = students.shift()
                students.push(removed)
                refusalcounter++
            }
        }
        return students.length


    }
}
