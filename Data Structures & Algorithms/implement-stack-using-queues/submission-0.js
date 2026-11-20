class MyStack {
    constructor(queue1, queue2) {
        this.queue1 = []
        this.queue2 = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue2.push(x)
        while (this.queue1.length > 0) {
            let top = this.queue1.shift()
            this.queue2.push(top)
        }
        let temp = this.queue1
        this.queue1 = this.queue2
        this.queue2 = temp
    }

    /**
     * @return {number}
     */
    pop() {
        let removed = this.queue1.shift()
        return removed
    }

    /**
     * @return {number}
     */
    top() {
        let topElement = this.queue1[0]
        return topElement
    }

    /**
     * @return {boolean}
     */
    empty() {

        if (this.queue1.length === 0) {
            return true
        }
        else
            return false
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
