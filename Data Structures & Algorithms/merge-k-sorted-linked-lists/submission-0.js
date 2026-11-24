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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode()
        let current = dummy
        while (list1  && list2 ) {
            if (list1.val < list2.val) {
                current.next = list1
                list1 = list1.next
                current = current.next
            }
            else {
                current.next = list2
                list2 = list2.next
                current = current.next
            }
        }
            current.next = list1 || list2;
        return dummy.next
    }

    mergeKLists(lists) {
        while (lists.length > 1) {
            let mergedList = []
            for (let i = 0; i < lists.length; i += 2) {
                if (i + 1 >= lists.length) {

                    mergedList.push(lists[i])
                }
                else {
                    let merged = this.mergeTwoLists(lists[i], lists[i + 1])
                    mergedList.push(merged)
                }
            }
            lists = mergedList
        }
        return lists[0] || null
    }
}
