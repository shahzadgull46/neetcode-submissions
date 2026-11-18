/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let current1 = list1;
        let current2 = list2;
        let beggining = null,
            tail = null;
        if (current1 === null && current2 === null) {
            return null;
        }
        if (current1 === null && current2 !== null) {
            return current2;
        }
        if (current1 !== null && current2 === null) {
            return current1;
        }
        while (current1 !== null && current2 !== null) {
            if (current1.val <= current2.val) {
                if (beggining === null) {
                    beggining = current1;
                    tail = current1;
                } else {
                    tail.next = current1;
                    tail = current1;
                }

                current1 = current1.next;
            } else {
                if (beggining === null) {
                    beggining = current2;
                    tail = current2;
                } else {
                    tail.next = current2;
                    tail = current2;
                }
                current2 = current2.next;
            }
        }

        if (current1 !== null) {
            tail.next = current1
        }
        else {
            tail.next = current2
        }
        return (beggining)

    }


}
