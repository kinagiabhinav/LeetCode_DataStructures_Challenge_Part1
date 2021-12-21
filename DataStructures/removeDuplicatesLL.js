/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * 
 * Input: head = [1,1,2]
    Output: [1,2]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let current = head;
    let prev = new ListNode();
    
    while(current && current.next){
        if(current.val === current.next.val){
            if(current === head){
                head = head.next;
            } else {
                prev.next = current.next;
                current = current.next;
                continue;
            }
        }
        prev = current;
        current = current.next;
    }
    
    return head;
};