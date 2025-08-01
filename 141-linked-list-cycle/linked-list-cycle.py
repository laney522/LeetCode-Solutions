# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        dummy = ListNode()
        dummy.next = head
        slow = fast = dummy
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next

            if slow is fast:
                return True
        
        return False

        # Time: O(n)
        # Space: O(n)