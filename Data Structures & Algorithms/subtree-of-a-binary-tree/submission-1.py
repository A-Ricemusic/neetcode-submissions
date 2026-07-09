# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def isSameTree(curr1, curr2):
            if not curr1 and not curr2:
                return True
            if not curr1 or not curr2 or curr1.val != curr2.val:
                return False
            left = isSameTree(curr1.left, curr2.left)
            right = isSameTree(curr1.right, curr2.right)
            if not left or not right:
                return False
            return True
        
        stack = [root]

        while stack:
            curr = stack.pop()
            if curr.val == subRoot.val:
                st = isSameTree(curr, subRoot)
                if st:
                    return True
            if curr.left:
                stack.append(curr.left)
            if curr.right:
                stack.append(curr.right)
        return False


        