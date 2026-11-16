class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let array = [...s];
        let stack = [];

        for (const arr of array) {
            if (arr === "(" || arr === "{" || arr === "[") {
                stack.push(arr);
            }

            if (arr === ")" || arr === "}" || arr === "]") {
                if (stack.length === 0) {
                    return false;
                }

                const opening = stack.pop();

                if (arr === ")" && opening !== "(") {
                    return false;
                }

                if (arr === "}" && opening !== "{") {
                    return false;
                }

                if (arr === "]" && opening !== "[") {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
