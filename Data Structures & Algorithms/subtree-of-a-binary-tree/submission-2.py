# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def isSameTree(curr1, curr2):
            stack = [(curr1,curr2)]
            while stack:
                node1, node2 = stack.pop()
                if not node1 and not node2:
                    continue
                if not node1 or not node2:
                    return False
                if node1.val != node2.val:
                    return False
                stack.append((node1.left, node2.left))
                stack.append((node1.right, node2.right))
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


        