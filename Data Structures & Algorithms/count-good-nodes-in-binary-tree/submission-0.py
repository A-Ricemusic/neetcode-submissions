# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        stack  = [(root, float("-infinity"))]
        res = 0

        while stack:
            node, val = stack.pop()
            if node.val >= val:
                res += 1
            if node.left:
                stack.append((node.left, max(val,node.val)))
            if node.right:
                stack.append((node.right,max(val,node.val)))
        return res
        