# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


# [2,1,3]
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        stack = [(root, float("-inf"), float("inf"))]

        while stack:
            node, low, high = stack.pop()

            if not node:
                continue

            if not (low < node.val < high):
                return False
            stack.append((node.left, low, node.val))
            stack.append((node.right, node.val, high))
            
        return True
        