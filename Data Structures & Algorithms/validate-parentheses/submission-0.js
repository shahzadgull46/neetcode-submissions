class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        const pairs = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        for (const bracket of s) {
            if (bracket == "(" || bracket == "{" || bracket == "[") {
                stack.push(bracket);
            } else {
                if (stack.length === 0) {
                    false;
                }

                let opening = stack.pop();
                if (opening !== pairs[bracket]) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
