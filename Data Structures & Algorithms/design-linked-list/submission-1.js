class MyLinkedList {
    constructor(val) {
        this.val = val
        this.next = null
        this.head = null
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        if (index === null) {
            return -1
        }
        let current = this.head
        let position = 0
        while (current !== null) {
            if (position === index - 1) {
                return current.val
            }
            current = current.next
            position++
        }
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index === null) {
            return -1
        }
        let current = this.head
        let position = 0;
        while (current !== null) {
            if (position === index) {
                return current.val
            }
            current = current.next
            position++
        }
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newNode = new MyLinkedList(val)
        newNode.next = this.head
        this.head = newNode
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newNode = new MyLinkedList(val)
        if (this.head === null) {
            this.head = newNode
            return
        }
        let current = this.head

        while (current.next !== null) {
            current = current.next
        }
        current.next = newNode
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index === 0) {
            this.addAtHead(val)
            return
        }
        let newNode = new MyLinkedList(val)
        let current = this.head
        let position = 0
        while (current !== null) {
            if (position === index - 1) {
                newNode.next = current.next
                current.next = newNode
                return

            }
            current = current.next
            position++
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index >= 0) {
            let current = this.head
            let position=0;
            while (current.next !== null) {
                if (position === index-1) {
                    current.next = current.next.next
                    return
                }
                current = current.next
                position++
            }
        }
    }
}
