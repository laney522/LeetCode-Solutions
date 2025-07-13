/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {

    if (!list1) return list2;
    if (!list2) return list1;

    let head = null, curr = null;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            if (!head) head = curr = list1; 
            else {
                curr.next = list1;
                curr = curr.next;
            }
            list1 = list1.next;
        } else {
            if (!head) head = curr = list2; 
            else {
                curr.next = list2;
                curr = curr.next;
            }
            list2 = list2.next;
        }
    }
    curr.next = list1 || list2;
    return head;
};
var mergeKLists = function(lists) {

    if(!lists || !lists.length) return null;

    let n = lists.length -1;
    let i = 0; 

    while(n >0){ 
        if(i >= n ) i = 0;
        lists[i] = mergeTwoLists(lists[i] ,lists[n] );
        i++;
        n--;
    }
    return lists[0]
};